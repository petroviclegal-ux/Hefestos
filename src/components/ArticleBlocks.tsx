import * as React from 'react';
import Link from 'next/link';
import type { Block } from '@/lib/insights';
import { href } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

/**
 * Renderer for article and landing-page body blocks: prose with inline links,
 * tables, and three server-rendered SVG charts (timeline, bars, bridge).
 *
 * The charts are plain inline SVG with real <text> labels, so they cost no
 * JavaScript, print correctly and stay readable to a crawler. Each one also
 * carries its data as a visually hidden list for screen readers.
 */

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Text with [anchor](segment) links turned into locale-prefixed <Link>s. */
export function RichText({ text, locale }: { text: string; locale: Locale }) {
  const out: React.ReactNode[] = [];
  const re = new RegExp(LINK_RE.source, 'g');
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, to] = m;
    out.push(
      /^https?:\/\//.test(to) ? (
        <a key={k++} href={to} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      ) : (
        <Link key={k++} href={href(locale, to)}>
          {label}
        </Link>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** The same text with link markup reduced to its anchor, for JSON-LD and meta. */
export function plainText(text: string): string {
  return text.replace(new RegExp(LINK_RE.source, 'g'), '$1');
}

function numberFormat(locale: Locale) {
  return new Intl.NumberFormat(locale === 'sr' ? 'sr-Latn-RS' : 'en-GB', {
    maximumFractionDigits: 1,
  });
}

/** Split a label into at most two lines of roughly `max` characters. */
function wrap(label: string, max = 30): string[] {
  if (label.length <= max) return [label];
  const words = label.split(' ');
  let first = '';
  let i = 0;
  while (i < words.length && (first + ' ' + words[i]).trim().length <= max) {
    first = (first + ' ' + words[i]).trim();
    i++;
  }
  if (!first) return [label];
  return [first, words.slice(i).join(' ')];
}

const W = 680;
const LABEL_W = 236;
const PLOT_X = 248;
const PLOT_W = W - PLOT_X - 70;
const ROW = 46;
const TOP = 8;
const AXIS = 30;

const MAROON = '#7A1F35';
const MAROON_TINT = '#C7A7AF';
const INK = '#2A333F';
const GRID = 'rgba(11,15,20,0.10)';
const LABEL = 'rgba(11,15,20,0.78)';
const MUTED = 'rgba(11,15,20,0.55)';

function RowLabel({ y, label }: { y: number; label: string }) {
  const lines = wrap(label);
  const start = y - (lines.length - 1) * 8;
  return (
    <text x={LABEL_W} y={start} textAnchor="end" fontSize="13" fill={LABEL}>
      {lines.map((line, i) => (
        <tspan key={i} x={LABEL_W} dy={i === 0 ? 4 : 16}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function ChartFrame({
  title,
  note,
  height,
  data,
  children,
}: {
  title: string;
  note?: string;
  height: number;
  data: string[];
  children: React.ReactNode;
}) {
  return (
    <figure className="article-figure">
      <figcaption className="article-figure-title">{title}</figcaption>
      <svg
        viewBox={`0 0 ${W} ${height}`}
        role="img"
        aria-label={title}
        className="h-auto w-full"
        fontFamily="inherit"
      >
        {children}
      </svg>
      <ul className="sr-only">
        {data.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      {note ? <p className="article-figure-note">{note}</p> : null}
    </figure>
  );
}

function Ticks({
  min,
  max,
  height,
  x,
  fmt,
  unit,
}: {
  min: number;
  max: number;
  height: number;
  x: (v: number) => number;
  fmt: Intl.NumberFormat;
  unit: string;
}) {
  const span = max - min;
  const rough = span / 6;
  const pow = Math.pow(10, Math.floor(Math.log10(rough || 1)));
  const step = [1, 2, 2.5, 5, 10].map((s) => s * pow).find((s) => s >= rough) ?? pow * 10;
  const ticks: number[] = [];
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) ticks.push(v);
  const axisY = height - AXIS + 6;
  return (
    <g>
      {ticks.map((v) => (
        <g key={v}>
          <line x1={x(v)} x2={x(v)} y1={TOP} y2={axisY - 4} stroke={GRID} />
          <text x={x(v)} y={axisY + 12} textAnchor="middle" fontSize="11" fill={MUTED}>
            {fmt.format(v)}
          </text>
        </g>
      ))}
      <text x={PLOT_X + PLOT_W} y={axisY + 26} textAnchor="end" fontSize="11" fill={MUTED}>
        {unit}
      </text>
    </g>
  );
}

function Timeline({ block, locale }: { block: Extract<Block, { kind: 'timeline' }>; locale: Locale }) {
  const fmt = numberFormat(locale);
  const max = Math.max(...block.items.map((i) => i.end));
  const height = TOP + block.items.length * ROW + AXIS + 18;
  const x = (v: number) => PLOT_X + (v / max) * PLOT_W;
  return (
    <ChartFrame
      title={block.title}
      note={block.note}
      height={height}
      data={block.items.map((i) => `${i.label}: ${fmt.format(i.start)}–${fmt.format(i.end)} ${block.unit}`)}
    >
      <Ticks min={0} max={max} height={height} x={x} fmt={fmt} unit={block.unit} />
      {block.items.map((item, i) => {
        const cy = TOP + i * ROW + ROW / 2;
        return (
          <g key={i}>
            <RowLabel y={cy} label={item.label} />
            <rect
              x={x(item.start)}
              y={cy - 9}
              width={Math.max(2, x(item.end) - x(item.start))}
              height={18}
              rx={2}
              fill={MAROON}
            />
            <text x={x(item.end) + 6} y={cy + 4} fontSize="12" fill={MUTED}>
              {fmt.format(item.start)}–{fmt.format(item.end)}
            </text>
          </g>
        );
      })}
    </ChartFrame>
  );
}

function Bars({ block, locale }: { block: Extract<Block, { kind: 'bars' }>; locale: Locale }) {
  const fmt = numberFormat(locale);
  const max = Math.max(...block.items.map((i) => i.value));
  const height = TOP + block.items.length * ROW + AXIS + 18;
  const x = (v: number) => PLOT_X + (v / max) * PLOT_W;
  return (
    <ChartFrame
      title={block.title}
      note={block.note}
      height={height}
      data={block.items.map((i) => `${i.label}: ${fmt.format(i.value)} ${block.unit}`)}
    >
      <Ticks min={0} max={max} height={height} x={x} fmt={fmt} unit={block.unit} />
      {block.items.map((item, i) => {
        const cy = TOP + i * ROW + ROW / 2;
        return (
          <g key={i}>
            <RowLabel y={cy} label={item.label} />
            <rect x={PLOT_X} y={cy - 9} width={Math.max(2, x(item.value) - PLOT_X)} height={18} rx={2} fill={MAROON} />
            <text x={x(item.value) + 6} y={cy + 4} fontSize="12" fill={MUTED}>
              {fmt.format(item.value)}
            </text>
          </g>
        );
      })}
    </ChartFrame>
  );
}

function Bridge({ block, locale }: { block: Extract<Block, { kind: 'bridge' }>; locale: Locale }) {
  const fmt = numberFormat(locale);
  let running = 0;
  const segs = block.items.map((item) => {
    const from = item.total ? 0 : running;
    const to = item.total ? item.value : running + item.value;
    running = to;
    return { ...item, from, to };
  });
  const values = segs.flatMap((s) => [s.from, s.to]);
  const min = Math.min(0, ...values);
  const max = Math.max(...values);
  const x = (v: number) => PLOT_X + ((v - min) / (max - min || 1)) * PLOT_W;
  const height = TOP + segs.length * ROW + AXIS + 18;
  const signed = (v: number) => (v < 0 ? `−${fmt.format(-v)}` : `+${fmt.format(v)}`);

  return (
    <ChartFrame
      title={block.title}
      note={block.note}
      height={height}
      data={segs.map((s) => `${s.label}: ${s.total ? fmt.format(s.value) : signed(s.value)} ${block.unit}`)}
    >
      <Ticks min={min} max={max} height={height} x={x} fmt={fmt} unit={block.unit} />
      {segs.map((s, i) => {
        const cy = TOP + i * ROW + ROW / 2;
        const left = x(Math.min(s.from, s.to));
        const right = x(Math.max(s.from, s.to));
        const fill = s.total ? INK : s.value >= 0 ? MAROON : MAROON_TINT;
        const next = segs[i + 1];
        return (
          <g key={i}>
            <RowLabel y={cy} label={s.label} />
            <rect x={left} y={cy - 9} width={Math.max(2, right - left)} height={18} rx={2} fill={fill} />
            <text x={right + 6} y={cy + 4} fontSize="12" fill={s.total ? INK : MUTED} fontWeight={s.total ? 600 : 400}>
              {s.total ? fmt.format(s.value) : signed(s.value)}
            </text>
            {next && !next.total ? (
              <line
                x1={x(s.to)}
                x2={x(s.to)}
                y1={cy + 9}
                y2={cy + ROW - 9}
                stroke={MUTED}
                strokeDasharray="2 3"
              />
            ) : null}
          </g>
        );
      })}
    </ChartFrame>
  );
}

function Table({ block, locale }: { block: Extract<Block, { kind: 'table' }>; locale: Locale }) {
  return (
    <figure className="article-figure">
      <div className="overflow-x-auto">
        <table>
          <caption className="article-figure-title">{block.caption}</caption>
          <thead>
            <tr>
              {block.head.map((h, i) => (
                <th key={i} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? 'font-medium text-ink' : undefined}>
                    <RichText text={cell} locale={locale} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.note ? <p className="article-figure-note">{block.note}</p> : null}
    </figure>
  );
}

export function ArticleBlock({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.kind) {
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((it, j) => (
            <li key={j}>
              <RichText text={it} locale={locale} />
            </li>
          ))}
        </ul>
      );
    case 'links':
      return (
        <ul>
          {block.items.map((it, j) => (
            <li key={j}>
              <Link href={href(locale, it.to)}>{it.label}</Link>
            </li>
          ))}
        </ul>
      );
    case 'table':
      return <Table block={block} locale={locale} />;
    case 'timeline':
      return <Timeline block={block} locale={locale} />;
    case 'bars':
      return <Bars block={block} locale={locale} />;
    case 'bridge':
      return <Bridge block={block} locale={locale} />;
    default:
      return (
        <p>
          <RichText text={block.text} locale={locale} />
        </p>
      );
  }
}

export function ArticleBody({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <>
      {blocks.map((block, i) => (
        <ArticleBlock key={i} block={block} locale={locale} />
      ))}
    </>
  );
}
