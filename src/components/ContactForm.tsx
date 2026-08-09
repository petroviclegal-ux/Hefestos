'use client';

import * as React from 'react';
import { site, type Locale } from '@/lib/site';
import { getContent } from '@/lib/content';

/**
 * Contact form with a mailto fallback. The statically-exported site has no
 * server runtime, so on submit the form composes a pre-filled email to the
 * firm's inbox — works on any static host. To use a real endpoint later
 * (Formspree, Web3Forms, a Vercel route, …), replace `handleSubmit`.
 *
 * TODO(client): point site.contact.email at the monitored inbox before launch.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const c = getContent(locale).contact;
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = `Enquiry from ${name || 'website'}${company ? ` (${company})` : ''}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Company: ${company}`, '', message].join('\n');
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  const fieldClass =
    'w-full border border-ink/20 bg-white/60 px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-maroon focus:outline-none focus:ring-1 focus:ring-maroon';
  const labelClass = 'mb-2 block text-xs font-sans uppercase tracking-[0.16em] text-ink/60';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>{c.nameLabel}</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{c.emailLabel}</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>{c.companyLabel}</label>
        <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{c.messageLabel}</label>
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-maroon px-7 py-3 text-sm font-sans uppercase tracking-[0.14em] text-bone transition-colors hover:bg-maroon-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
        >
          {c.submit}
        </button>
        {submitted && (
          <p role="status" className="text-sm text-ink/70">
            {c.fallbackNote}{' '}
            <a className="text-maroon underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
