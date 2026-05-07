import { PersonalInfo, AboutHighlight } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface AboutProps {
  personal: PersonalInfo;
  highlights: AboutHighlight[];
}

export default function About({ personal, highlights }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader label="Who I Am" title="About Me" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <AnimatedSection delay={100}>
            <div className="space-y-5">
              {personal.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="flex items-center gap-2 pt-2">
                <svg
                  className="w-4 h-4 text-cyan-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-500 text-sm">{personal.location}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center
                    hover:border-cyan-800/60 transition-colors group"
                >
                  <p className="text-4xl font-black text-cyan-400 mb-1.5 group-hover:scale-105 transition-transform">
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
