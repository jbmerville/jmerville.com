'use client';
import { useEffect, useRef } from 'react';
import { usePostHog } from '../_components/PostHogProvider';

export function useSectionTimeTracking(sectionName: string) {
  const posthog = usePostHog();
  const ref = useRef<HTMLElement>(null);
  const enterTimeRef = useRef<number | null>(null);
  const hasTracked = useRef(false); // prevent duplicate events on re-renders

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && enterTimeRef.current === null) {
          // Section entered viewport
          enterTimeRef.current = Date.now();
        } else if (
          !entry.isIntersecting &&
          enterTimeRef.current !== null &&
          !hasTracked.current
        ) {
          // Section left viewport
          const duration = Math.round(
            (Date.now() - enterTimeRef.current) / 1000,
          );

          if (duration >= 1) {
            // ignore accidental flickers
            posthog.capture('section_viewed', {
              section: sectionName,
              duration_seconds: duration,
            });
            hasTracked.current = true;
          }

          enterTimeRef.current = null;
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName, posthog]);

  return ref;
}
