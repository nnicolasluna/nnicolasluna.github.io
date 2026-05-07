import { Certification } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeader label="Credentials" title="Certifications" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <a
                href={cert.credentialUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-gray-950 border border-gray-800 rounded-xl p-5
                  hover:border-cyan-800/60 hover:-translate-y-0.5
                  transition-all duration-300 group block"
              >
                <span className="text-3xl mb-3" aria-hidden="true">🏆</span>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-1.5">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-xs mb-auto">{cert.issuer}</p>
                <p className="text-gray-700 text-xs font-mono mt-3">{cert.date}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
