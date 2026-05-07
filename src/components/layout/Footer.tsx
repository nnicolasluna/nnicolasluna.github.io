import { SocialLinks } from '@/types';

interface FooterProps {
  name: string;
  social: SocialLinks;
}

export default function Footer({ name, social }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-sm">
          © {year}{' '}
          <span className="text-gray-500 font-medium">{name}</span>.{' '}
          All rights reserved.
        </p>

        <nav aria-label="Social links" className="flex items-center gap-6">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-400 text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-400 text-sm font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-gray-600 hover:text-cyan-400 text-sm font-medium transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
