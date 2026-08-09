import * as React from 'react';

/**
 * Hefestos Capital brand mark — the interlaced square "chain-knot" from the
 * Hefestos logo, reproduced as clean vector geometry so it stays crisp at every
 * size. Rendered as a set of rectangles on a 96×96 grid.
 *
 * By default the mark is painted with the brand maroon gradient (matching the
 * logo). Pass a solid `color` to override (e.g. a single-colour light version
 * for dark backgrounds). The same geometry is mirrored in /public/icon.svg,
 * /public/favicon.svg and /public/og/og-default.svg.
 */
type MonogramMarkProps = {
  /** Solid fill override. When omitted, the maroon gradient is used. */
  color?: string;
  className?: string;
  title?: string;
};

const MARK_RECTS: ReadonlyArray<readonly [number, number, number, number]> = [
  [22, 0, 30, 8], [66, 0, 30, 8],
  [22, 8, 8, 34], [44, 8, 8, 12], [66, 8, 8, 34], [88, 8, 8, 22],
  [0, 22, 20, 8], [32, 22, 32, 8], [76, 22, 12, 8],
  [0, 30, 8, 22], [44, 32, 8, 32],
  [8, 44, 34, 8], [54, 44, 42, 8], [88, 52, 8, 22],
  [22, 54, 8, 42], [66, 54, 8, 42],
  [0, 66, 20, 8], [32, 66, 32, 8], [76, 66, 12, 8],
  [0, 74, 8, 22], [44, 76, 8, 20],
  [8, 88, 14, 8], [52, 88, 14, 8],
];

let gradientSeq = 0;

export function MonogramMark({
  color,
  className,
  title = 'Hefestos Capital',
}: MonogramMarkProps) {
  // Unique gradient id per instance so multiple marks on a page don't collide.
  const gradId = React.useMemo(() => `hef-mark-grad-${gradientSeq++}`, []);
  const fill = color ?? `url(#${gradId})`;

  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label={title}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {!color && (
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A03A50" />
            <stop offset="0.55" stopColor="#7A1F35" />
            <stop offset="1" stopColor="#4A1220" />
          </linearGradient>
        </defs>
      )}
      {MARK_RECTS.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  );
}
