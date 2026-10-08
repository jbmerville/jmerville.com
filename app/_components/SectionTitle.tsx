interface SectionTitleProps {
  children: string;
  isVisible?: boolean;
}

/** Shared section heading: title with a short accent bar underneath. */
const SectionTitle = ({ children, isVisible = true }: SectionTitleProps) => (
  <div
    className={`mb-10 flex flex-col items-start sm:mb-14 ${isVisible ? 'animate-fade-up-fast' : 'opacity-0'}`}
  >
    <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100 sm:text-3xl">
      {children}
    </h2>
    <div className="mt-3 h-1 w-12 rounded-full bg-secondary" />
  </div>
);

export default SectionTitle;
