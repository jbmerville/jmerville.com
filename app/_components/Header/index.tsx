'use client';

import { useSyncExternalStore } from 'react';

import { useTheme } from 'next-themes';
import { usePostHog } from '../PostHogProvider';

const ResumeButton = () => {
  const posthog = usePostHog();
  return (
    <a
      href="/jbmerville-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[18px] tracking-wide cursor-pointer no-underline transition-all duration-150 hover:opacity-70"
      onClick={() => posthog.capture('button_clicked', { button: 'resume' })}
    >
      Resume
    </a>
  );
};

const Header = () => {
  return (
    <>
      {/* Mobile */}
      <div className="section-content flex items-center justify-between pt-4 sm:hidden">
        <Toggle />
        <ResumeButton />
      </div>

      {/* Desktop */}
      <header className="hidden h-12.5 w-full sm:flex pt-4">
        <div className="section-content flex items-center justify-end">
          <Toggle />
          <nav className="ml-6 flex flex-row items-center justify-end">
            <ResumeButton />
          </nav>
        </div>
      </header>
    </>
  );
};

const Toggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const posthog = usePostHog();
  // The theme is only known on the client; render a neutral label until mounted
  // so the server and client markup match.
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = isMounted && resolvedTheme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(nextTheme);
        posthog.capture('theme_changed', { theme: nextTheme });
      }}
      className="min-w-[7.5rem] cursor-pointer rounded-full px-3 py-1 text-m ring-1 ring-gray-300 transition-colors hover:bg-gray-100 dark:ring-gray-600 dark:hover:bg-gray-800"
    >
      {isMounted ? (isDark ? 'Light Mode' : 'Dark Mode') : 'Theme'}
    </button>
  );
};

export default Header;
