interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-16 bg-cyan-500 rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
