import React from 'react';
import { UploadCloud, Cpu, Layers, CheckCircle2, Zap } from 'lucide-react';

// Workflow as a bento grid (the same three steps, in varied tiles so it
// matches the portfolio and gallery): step 1 wide, steps 2 and 3 single,
// and a wide 48-hour highlight tile to close the rectangle.
export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Send the brief and product',
      description: 'Send your website, product photos or key selling angles. For CGI, digital assets are all we need — no samples to ship.',
      icon: <UploadCloud className="w-5 h-5 text-blue-400" />,
      tag: 'Step 1 • 15 Mins',
      highlight: 'Zero physical shipping delays',
      span: 'lg:col-span-2',
    },
    {
      step: '02',
      title: 'We make the ads',
      description: '3D CGI ads, creator-led video spots and poster ads, with studio lighting and photorealistic effects.',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      tag: 'Step 2 • 24 Hours',
      highlight: 'CGI, UGC and poster ads',
      span: '',
    },
    {
      step: '03',
      title: 'Get the finished ads',
      description: 'Get the finished 9:16 and 1:1 cuts with captions and sound, named and ready for Ads Manager.',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      tag: 'Step 3 • 48 Hours',
      highlight: 'Ready for Ads Manager',
      span: '',
    },
  ];

  return (
    <section
      id="workflow"
      className="py-12 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>48-hour ad pipeline</span>
          </div>
          <h2
            id="workflow-title"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            How Hook Frames Studio delivers ad content fast
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A three-step process from product link to finished ad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors group shadow-xl ${item.span}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}

          {/* 48-hour highlight — wide tile that closes the bento rectangle */}
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between space-y-4 shadow-xl lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-neutral-800 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800">
                  Brief to ready cut
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                48 hours, start to finish
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                No film crew, no scheduling headaches — your finished ads, named and ready for Ads Manager, in as little as two days.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Fastest way from product to published ad</span>
            </div>
          </div>
        </div>

        {/* Pay on approval — how the first ad works, so brands know the risk is ours */}
        <div className="mt-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-white tracking-tight">Pay on approval — first ad only</h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2">Your first ad is risk-free. You only pay after you approve the preview.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
              <p className="text-xs font-mono text-blue-400">01</p>
              <p className="text-sm font-bold text-white mt-2">Watermarked preview</p>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">We send a watermarked preview first, so you see the ad before anything is paid.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
              <p className="text-xs font-mono text-blue-400">02</p>
              <p className="text-sm font-bold text-white mt-2">You approve</p>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">48–72 hours to approve, with 1 revision included.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
              <p className="text-xs font-mono text-blue-400">03</p>
              <p className="text-sm font-bold text-white mt-2">You pay</p>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">Pay only after you approve the preview. No upfront payment on the first ad.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
              <p className="text-xs font-mono text-blue-400">04</p>
              <p className="text-sm font-bold text-white mt-2">Clean files</p>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">We send the clean files, ready for Ads Manager, with full commercial rights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
