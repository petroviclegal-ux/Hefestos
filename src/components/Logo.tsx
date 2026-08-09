import * as React from 'react';
import Link from 'next/link';
import { MonogramMark } from './MonogramMark';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

type LogoProps = {
  locale: Locale;
  /** 'dark' = for light backgrounds; 'light' = reversed for dark backgrounds. */
  variant?: 'dark' | 'light';
  className?: string;
  asLink?: boolean;
};

/**
 * Hefestos Capital lockup: the maroon chain-knot mark beside the "Hefestos
 * Capital" serif wordmark, with a small tracked accent line beneath — mirroring
 * the restrained, institutional style.
 */
export function Logo({ locale, variant = 'dark', className = '', asLink = true }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-bone' : 'text-ink';

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <MonogramMark className="h-9 w-9 shrink-0" title="Hefestos Capital" />
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.16em]">
          Hefestos
        </span>
        <span
          className={`mt-1 font-display text-[0.95rem] font-light uppercase tracking-[0.34em] ${
            isLight ? 'text-bone/75' : 'text-ink/70'
          }`}
        >
          Capital
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href={href(locale)} aria-label="Hefestos Capital — home" className="inline-flex">
      {inner}
    </Link>
  );
}
