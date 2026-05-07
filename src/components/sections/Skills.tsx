import { SkillCategory } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: '🖥️',
  Backend: '⚙️',
  Databases: '🗄️',
  Tools: '🔧',
  DevOps: '🚀',
};

export default function Skills({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader label="What I Know" title="Skills & Technologies" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 80}>
              <div className="h-full bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-800/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" role="img" aria-label={cat.category}>
                    {CATEGORY_ICONS[cat.category] ?? '💡'}
                  </span>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700/60
                        hover:border-cyan-600/60 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
