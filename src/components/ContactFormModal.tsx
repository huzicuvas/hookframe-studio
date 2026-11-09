import React, { useState, useEffect } from 'react';
import { X, Send, Check, AlertCircle, Mail } from 'lucide-react';

// What a button passes in when it opens the form: the email subject, the
// product shown pre-selected in the "What do you need?" list, and the email
// body template used by the "Open in Gmail" link.
export interface ContactPrefill {
  subject: string;
  product: string;
  body: string;
}

// The "What do you need?" options — one per pricing choice, plus quotation.
export const CONTACT_PRODUCTS = [
  'Test ad — $50 pay on approval',
  'UGC video — 15 seconds ($75)',
  'UGC video — 20 seconds ($99)',
  'UGC video — 30 seconds ($149)',
  'CGI video — 15 seconds ($175)',
  'CGI video — 30 seconds ($299)',
  'Poster ad — $30',
  'Poster ad with a video — $20',
  'Hook Pack — 3 hooks ($189)',
  'Hook Pack — 5 hooks ($299)',
  'Custom Brand Pack — $249',
  'Quotation / custom scope',
] as const;

const RECIPIENT_EMAIL = 'kiramorganai@gmail.com';
// FormSubmit (formsubmit.co) — free, no account. First submission to this
// inbox triggers a one-time confirmation email to kiramorganai@gmail.com;
// messages only land in the inbox after that link is clicked.
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

const gmailComposeUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}` +
  `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

interface ContactFormModalProps {
  prefill: ContactPrefill;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ prefill, onClose }) => {
  const [product, setProduct] = useState(prefill.product);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorDetail, setErrorDetail] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // If the modal is opened for a different product, reset to that product.
  useEffect(() => {
    setProduct(prefill.product);
    setStatus('idle');
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot filled — a bot. Silently pretend it worked.
    if (honeypot.trim() !== '') {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    setErrorDetail('');
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          brand: brand.trim(),
          product,
          message: message.trim(),
          _subject: prefill.subject,
          _replyto: email.trim(),
          _template: 'table',
          _captcha: 'false',
          _honey: honeypot,
        }),
      });
      const data: unknown = await res.json().catch(() => ({}));
      const refused =
        !res.ok ||
        (typeof data === 'object' && data !== null && ('error' in data || (data as { success?: unknown }).success === false));
      if (refused) {
        const detail =
          typeof data === 'object' && data !== null && 'message' in data
            ? String((data as { message?: unknown }).message)
            : '';
        setErrorDetail(detail);
        setStatus('error');
        return;
      }
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors';
  const labelCls = 'block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5';

  return (
    <div
      id="contact-form-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-form-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Hook Frames Studio"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-950/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 transition-colors"
          aria-label="Close contact form"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-7">
          {status === 'sent' ? (
            <div className="text-center py-6">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 mb-4">
                <Check className="w-7 h-7" />
              </span>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Message sent
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed max-w-sm mx-auto">
                Thanks, {name.trim() ? name.trim().split(' ')[0] : 'friend'} — your message is on
                its way. We&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-7 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:border-[#F5B544] border border-transparent transition-colors active:scale-95"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight pr-10">
                Tell us what you need
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                Fill this in and we&apos;ll get back to you. Works on any device — no mail app needed.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Honeypot — invisible to people, bots fill it in */}
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
                />

                <div>
                  <label htmlFor="contact-product" className={labelCls}>
                    What do you need?
                  </label>
                  <select
                    id="contact-product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className={`${inputCls} cursor-pointer`}
                  >
                    {CONTACT_PRODUCTS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-name" className={labelCls}>
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelCls}>
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbrand.com"
                    required
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="contact-brand" className={labelCls}>
                    Brand name <span className="font-normal text-neutral-500">(optional)</span>
                  </label>
                  <input
                    id="contact-brand"
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Your brand or business"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelCls}>
                    Message <span className="font-normal text-neutral-500">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Product link, key selling point, anything that helps us make the right ad."
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      Something went wrong sending the form. Please try again, or email us directly
                      in Gmail below.
                      {errorDetail ? ` (${errorDetail})` : ''}
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] flex items-center justify-center gap-2 transition-colors disabled:opacity-60 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                </button>
              </form>

              <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-4">
                Prefer email?{' '}
                <a
                  href={gmailComposeUrl(prefill.subject, prefill.body)}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Open in Gmail
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
