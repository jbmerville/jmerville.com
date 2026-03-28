'use client';

import { useTheme } from 'next-themes';

const Header = () => {
  return (
    <>
      {/* Mobile */}
      <div className="section-content flex items-center justify-between pt-4 sm:hidden">
        <Toggle />
        <div className="text-[18px] tracking-wide cursor-pointer no-underline transition-all duration-150 hover:opacity-70">
          Resume
        </div>
      </div>

      {/* Desktop */}
      <header className="hidden h-12.5 w-full sm:flex pt-4">
        <div className="section-content flex items-center justify-end">
          <Toggle />
          <nav className="ml-6 flex flex-row items-center justify-end">
            <div className="text-[18px] tracking-wide cursor-pointer no-underline transition-all duration-150 hover:opacity-70">
              Resume
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const Toggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer rounded-full px-3 py-1 text-m ring-1 ring-gray-300 transition-colors hover:bg-gray-100 dark:ring-gray-600 dark:hover:bg-gray-800"
    >
      {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Header;
