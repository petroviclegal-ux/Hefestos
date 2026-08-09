'use client';

import * as React from 'react';
import { MonogramMark } from './MonogramMark';

/**
 * Team headshot with a graceful fallback: if the image file is missing or fails
 * to load, it renders the brand chain-knot on an ink tile instead of a broken
 * image. This lets us wire up a person before their photo has been added.
 */
export function TeamPhoto({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = React.useState(!src);

  if (failed || !src) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-bone-200/50">
        <MonogramMark className="h-16 w-16 opacity-80" title={name} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      /*
       * Blend the colour portrait into the warm page background using
       * mix-blend-multiply: white/light studio backgrounds dissolve into the
       * bone card colour while the subject keeps its own colour (multiplying
       * against a near-white backdrop preserves the photo's tones). No fade.
       */
      className="aspect-[4/5] w-full object-cover object-top mix-blend-multiply"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
