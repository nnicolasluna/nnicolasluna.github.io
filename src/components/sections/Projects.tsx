import { Project } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            label="What I've Built"
            title="Projects"
            subtitle="A selection of projects I've built — from open source tools to production applications."
          />
        </AnimatedSection>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 100}>
                <ProjectCard project={project} featured />
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Other projects */}
        {rest.length > 0 && (
          <div className={`${featured.length > 0 ? 'mt-6' : 'mt-16'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {rest.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
