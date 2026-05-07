import { EducationItem } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <section id="education" className="py-24 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeader label="Academic Background" title="Education" />
        </AnimatedSection>

        <div className="mt-16 space-y-5">
          {education.map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div
                  className="flex-shrink-0 w-14 h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-2xl"
                  aria-hidden="true"
                >
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {item.degree} in {item.field}
                      </h3>
                      <p className="text-cyan-400 font-medium mt-0.5">{item.institution}</p>
                    </div>
                    <span className="self-start text-xs text-gray-500 font-mono bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
