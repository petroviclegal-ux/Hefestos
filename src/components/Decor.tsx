import * as React from 'react';

/**
 * Decorative, non-photographic artwork used in place of generic stock imagery.
 * All decorative SVGs are aria-hidden — they carry no informational content.
 * The accent colour is the brand maroon (#7A1F35).
 */

const MAROON = '#7A1F35';

/** Subtle abstract line-art field used behind dark hero sections. */
export function LineArtField({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={MAROON} stopOpacity="0.55" />
          <stop offset="1" stopColor={MAROON} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fine ascending lines suggesting growth / capital curves */}
      <g stroke="url(#fadeRight)" strokeWidth="1" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={-100} y1={620 - i * 26} x2={1540} y2={420 - i * 60} />
        ))}
      </g>
      <g stroke="#F7F5F0" strokeOpacity="0.06" strokeWidth="1" fill="none">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={i * 110} y1={0} x2={i * 110 + 260} y2={600} />
        ))}
      </g>
    </svg>
  );
}

/**
 * Stylised cable-stayed bridge silhouette — an original, non-literal
 * illustration echoing the firm's "building bridges in emerging markets"
 * positioning. Uses `currentColor` so callers control the tone.
 */
export function BridgeSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 260"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* Deck */}
        <line x1="0" y1="196" x2="1440" y2="196" />
        {/* Two pylons */}
        <path d="M470 196 L470 40" />
        <path d="M970 196 L970 40" />
        {/* Cable stays — left pylon */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`la${i}`} x1="470" y1="46" x2={470 - (i + 1) * 58} y2="196" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`lb${i}`} x1="470" y1="46" x2={470 + (i + 1) * 34} y2="196" />
        ))}
        {/* Cable stays — right pylon */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`ra${i}`} x1="970" y1="46" x2={970 - (i + 1) * 34} y2="196" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`rb${i}`} x1="970" y1="46" x2={970 + (i + 1) * 58} y2="196" />
        ))}
        {/* Piers */}
        <line x1="470" y1="196" x2="470" y2="236" />
        <line x1="970" y1="196" x2="970" y2="236" />
      </g>
    </svg>
  );
}

/** A single thin ascending line used as a light-section motif. */
export function AscendingRule({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 40"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 34 L360 6" stroke={MAROON} strokeWidth="1.5" fill="none" />
      <circle cx="360" cy="6" r="3.5" fill={MAROON} />
    </svg>
  );
}
