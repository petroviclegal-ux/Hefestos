import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Root layout is intentionally a pass-through: the real <html>/<body> shell,
 * fonts, header and footer live in `[locale]/layout.tsx` so each locale can set
 * its own <html lang>. The only routes rendered directly under this root layout
 * are `/` (the language redirect) and the global 404 — both supply their own
 * <html> document.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
