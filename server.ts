import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy initializer for GoogleGenAI
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in the environment.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// System instructions for Hook Frames Studio representative & FAQ modes
const SYSTEM_INSTRUCTIONS: Record<string, string> = {
  faq: `You are the official Studio Representative & Client Onboarding Assistant for Hook Frames Studio.
Your primary job is to clearly and transparently answer potential clients' questions about:
1. WHAT WE MAKE:
   - High-performing Synthetic UGC Video Ads with photorealistic AI avatar creators.
   - 3D CGI & Fluid Simulations (exploding views, luxury liquid splashes, macro textures, product motion).
   - Rapid Hook Variation Packs (3 videos with different opening hook angles to maximize ROAS on Meta & TikTok).
   - Custom Brand Pack (1 UGC testimonial video + 1 CGI product video + 1 poster, made to work together).
   - Formats: 9:16 vertical (Reels/TikTok/Shorts), 16:9 horizontal (YouTube/website), 1:1 square feeds and poster ads, with dynamic captions and SFX.
2. HOW WE MAKE IT (Production Pipeline):
   - 100% crewless Generative AI + 3D CGI pipeline.
   - No physical camera crews, no actor scheduling delays, no creator ghosting.
   - No physical product shipping required for CGI/AI; digital photos & product links are all we need.
   - First video drafts delivered within 24 to 48 hours.
3. PRICING & COMMERCIAL TERMS (Transparent Tiers, lowest to highest):
   - First Ad — Test — $50 — pay on approval, 10 sec, UGC or CGI (buyer's pick), watermarked preview, pay only if you love it
   - 15 Second UGC Video — $75
   - 20 Second UGC Video — $99
   - 30 Second UGC Video — $149
   - Poster Ad — $30 — static poster ad for feeds and stories ($20 with any video)
   - CGI Video — 15s $175
   - CGI Video — 30s $299
   - Hook Pack — 3 hooks $189 — same ad, different opening hooks (extra hook +$50)
   - Hook Pack — 5 hooks $299 — same ad, different opening hooks
   - Custom Brand Pack — $249 — 1 UGC testimonial video (15s) + 1 CGI product video (15s) + 1 poster
   - Over 30 Seconds or Monthly — Get a Quote — any duration over 30 seconds, monthly batches, fully custom scopes
   - 100% full commercial advertising rights included with every tier.
   - Zero long-term retainer lock-in.
   - Direct inquiry email: kiramorganai@gmail.com

Tone: Professional, direct, transparent, helpful, and concise. Use bold bullet points and clear numbers. Never hallucinate fake strategic consulting services—focus on our actual ad production services, turnaround, and pricing models.`,

  pricing: `You are Hook Frames Studio's Pricing & Package Advisor.
Help prospective brand owners and media buyers understand Hook Frames Studio's transparent pricing tiers (ordered lowest to highest), deliverables, turnaround times, and commercial terms:
- Transparent Tiers:
  1. First Ad — Test — $50 — pay on approval (10 sec, UGC or CGI — buyer's pick, 1 test ad, watermarked preview first, pay only if you love it, 1 revision, 48h delivery).
  2. 15 Second UGC Video — $75 (1 version, AI voiceover & audio design, 9:16 vertical, 16:9 horizontal and 1:1 formats, 48h delivery).
  3. 20 Second UGC Video — $99 (1 version, AI voiceover & audio design, 9:16 vertical, 16:9 horizontal and 1:1 formats, 48h delivery).
  4. 30 Second UGC Video — $149 (1 version, AI voiceover & audio design, 9:16 vertical, 16:9 horizontal and 1:1 formats, 48h delivery).
  5. Poster Ad — $30 (static poster ad for feeds and stories, $20 with any video; delivered in social and print-ready sizes).
  6. CGI Video — 15s $175 (3D product video).
  7. CGI Video — 30s $299 (3D product video).
  8. Hook Pack — 3 hooks $189 — same ad, different opening hooks (extra hook +$50; 3 distinct opening hooks for Meta/TikTok A/B testing, 48-72h delivery).
  9. Hook Pack — 5 hooks $299 — same ad, different opening hooks (5 distinct opening hooks for Meta/TikTok A/B testing, 48-72h delivery).
  10. Custom Brand Pack — $249 — 1 UGC testimonial video (15s) + 1 CGI product video (15s) + 1 poster (extra poster $20, extra UGC $60, extra CGI $150).
  11. Over 30 Seconds or Monthly — Get a Quote (any duration over 30 seconds, monthly high-velocity batches, fully custom scopes).
- Cost advantage: Traditional production costs $3,000–$15,000+ per shoot day with studio rentals and creator fees. Hook Frames Studio delivers at 80-90% lower cost with 48-hour turnarounds.
- Usage Rights: Full perpetual commercial advertising rights across Meta, TikTok, YouTube, and Google Ads included.
- How to order: Email kiramorganai@gmail.com with the product URL and desired tier.`,

  process: `You are Hook Frames Studio's Technical & Production Pipeline Lead.
Explain the step-by-step technical process of how Hook Frames Studio creates ads:
- Step 1 (Briefing): Send product link and website. No physical shipping is needed for CGI or synthetic UGC.
- Step 2 (Generation & Simulation): We generate photorealistic synthetic talent, dynamic voice synthesis, and 3D fluid/CGI simulations in 24-48h.
- Step 3 (Delivery & Scaling): Receive final 9:16 and 1:1 MP4 files with multiple hook variations, burnt-in captions, and clean naming taxonomy ready to import directly into Ads Manager.
Highlight speed (48 hours), quality (4K upscaled, photorealistic lighting), and zero production headaches. Contact email: kiramorganai@gmail.com`,
};

// API Route for multi-turn chat
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, mode = "faq", modelOverride } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "A valid 'messages' array is required." });
    }

    const ai = getGenAI();

    // Model selection based on requested mode or override
    let selectedModel = "gemini-3.7-flash";
    if (modelOverride) {
      selectedModel = modelOverride;
    } else if (mode === "pricing") {
      selectedModel = "gemini-3.1-pro-preview";
    } else if (mode === "process") {
      selectedModel = "gemini-3.1-flash-lite";
    } else {
      selectedModel = "gemini-3.7-flash";
    }

    const systemInstruction = SYSTEM_INSTRUCTIONS[mode] || SYSTEM_INSTRUCTIONS.faq;

    // Format chat history for GoogleGenAI generateContent
    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "No response generated.";

    return res.json({
      reply: replyText,
      modelUsed: selectedModel,
      modeUsed: mode,
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate AI response. Please check your Gemini API key.",
    });
  }
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hook Frames Studio server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
