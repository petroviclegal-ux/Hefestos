'use client';

import * as React from 'react';
import type { Faq } from '@/lib/content';

/**
 * Accessible FAQ accordion built on native <details>/<summary> so it works
 * without JS and is fully crawlable. Pair with the FAQPage JSON-LD (see
 * faqSchema) on the same page for rich-result eligibility.
 */
export function FAQ({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => (
        <details key={i} className="group py-5" name="faq">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="font-serif text-lg text-ink group-open:text-maroon sm:text-xl">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-maroon transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-prose leading-relaxed text-ink/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
