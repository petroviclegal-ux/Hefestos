import * as React from 'react';

/**
 * Original, minimalist line icons for sectors and services. Stroke-based,
 * inherit `currentColor`, sized via `className`. Purely decorative accents —
 * each is aria-hidden and paired with a visible text label.
 */

type IconProps = { className?: string };

function Svg({ children, className = 'h-7 w-7' }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ sectors */

const sectorIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  retail: (p) => (
    <Svg {...p}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </Svg>
  ),
  'oil-gas': (p) => (
    <Svg {...p}>
      <path d="M12 3c2.5 3 4.5 5.4 4.5 8.5A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1-4.5-4.5C7.5 8.4 9.5 6 12 3Z" />
      <path d="M9 21h6M12 16v5" />
    </Svg>
  ),
  fmcg: (p) => (
    <Svg {...p}>
      <path d="M3 8l9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </Svg>
  ),
  'financial-services': (p) => (
    <Svg {...p}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V19M9 9.5V19M15 9.5V19M19 9.5V19" />
      <path d="M3 21h18" />
    </Svg>
  ),
  industrials: (p) => (
    <Svg {...p}>
      <path d="M3 21V10l5 3V10l5 3V6l3 2 5-3v13Z" />
      <path d="M3 21h18" />
    </Svg>
  ),
  energy: (p) => (
    <Svg {...p}>
      <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />
    </Svg>
  ),
};

export function SectorIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = sectorIcons[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}

/* ----------------------------------------------------------------- services */

const serviceIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  'mergers-acquisitions': (p) => (
    <Svg {...p}>
      <path d="M4 6h6v6a3 3 0 0 1-3 3H4" />
      <path d="M20 18h-6v-6a3 3 0 0 1 3-3h3" />
      <path d="M10 9l4 6" />
    </Svg>
  ),
  'joint-ventures-alliances': (p) => (
    <Svg {...p}>
      <rect x="3" y="4" width="7" height="7" />
      <rect x="14" y="13" width="7" height="7" />
      <path d="M10 7h5v6M14 17H9v-6" />
    </Svg>
  ),
  'equity-debt-raising': (p) => (
    <Svg {...p}>
      <path d="M4 20V12M9 20V8M14 20v-6M19 20V4" />
      <path d="M4 8l5-4 5 3 5-5" />
    </Svg>
  ),
  'special-situations': (p) => (
    <Svg {...p}>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </Svg>
  ),
  'principal-investments': (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l6 3" />
    </Svg>
  ),
};

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = serviceIcons[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}
