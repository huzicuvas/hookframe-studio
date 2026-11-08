import React from 'react';
import { UserCheck, Sparkles, Layers, Monitor, Play, Image } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const AboutServicesCombined: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-16 bg-[#0A0A0B]">
      {/* Anchor for services navigation */}
      <div id="services" className="-translate-y-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 4 Formats */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Formats
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              4 formats
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="flex flex-col justify-between bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 p-6 sm:p-7 transition-colors duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  {/* Preview slot: the format's true shape, shown as a small frame */}
                  <div className="relative h-44 rounded-2xl border border-dashed border-neutral-700/80 bg-neutral-950 flex items-center justify-center overflow-hidden">
                    <div
                      className={`flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 ${
                        service.aspectLabel?.includes('16:9')
                          ? 'w-44 aspect-video'
                          : service.aspectLabel?.includes('4:5')
                            ? 'h-32 aspect-[4/5]'
                            : 'h-32 aspect-[9/16]'
                      }`}
                    >
                      {service.previewKind === 'poster' ? (
                        <Image className="w-6 h-6 text-neutral-500" />
                      ) : (
                        <Play className="w-6 h-6 text-neutral-500" />
                      )}
                    </div>
                    <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-mono text-neutral-500">
                      {service.aspectLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-blue-400">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {service.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {service.oneLiner}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
