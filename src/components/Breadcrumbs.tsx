import * as React from 'react';
import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema } from '@/lib/structured-data';

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD. The caller passes
 * the complete, already-localised trail (including the home crumb).
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs font-sans tracking-wide text-ink/50">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((crumb, i) => {
            const last = i === items.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink/70">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-maroon">
                    {crumb.name}
                  </Link>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
