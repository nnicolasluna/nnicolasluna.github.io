import { ExperienceItem } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeader label="Where I've Worked" title="Work Experience" />
        </AnimatedSection>

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute top-5 bottom-5 left-5 w-px bg-gray-800 md:left-8" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative flex gap-7 md:gap-10">
                  {/* Dot */}
                  <div className="flex-shrink-0 z-10 w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-900 border-2 border-cyan-500/70 flex items-center justify-center">
                    <span className="text-cyan-400 text-xs md:text-sm font-bold font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-white leading-snug">{item.role}</h3>
                        <p className="text-cyan-400 font-medium mt-0.5">{item.company}</p>
                        {item.location && (
                          <p className="text-gray-600 text-sm mt-0.5">{item.location}</p>
                        )}
                      </div>
                      <span className="self-start text-xs text-gray-500 font-mono bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {item.startDate} – {item.endDate}
                      </span>
                    </div>

                    <div className="space-y-5">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((r, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-gray-400">
                              <span className="text-cyan-600 mt-0.5 flex-shrink-0">▸</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((a, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-gray-400">
                              <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-gray-800 text-cyan-400/80 text-xs rounded font-mono border border-gray-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
