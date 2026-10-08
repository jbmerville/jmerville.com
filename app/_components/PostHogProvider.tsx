'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') {
        ph.opt_out_capturing();
      }
      if (localStorage.getItem('is_internal') === 'true') {
        ph.register({ is_internal: true });
      }
    },
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}

export { usePostHog };
