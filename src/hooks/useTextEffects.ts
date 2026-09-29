import React from 'react';

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const GLYPHS = '!<>-_\\/[]{}=+*^?#01$%&';

/**
 * "Decrypts" text: characters start as random glyphs and resolve left to right.
 * Returns the current frame and a function to replay the effect.
 */
export function useScramble(text: string, duration = 1100) {
  const [output, setOutput] = React.useState(text);
  const frame = React.useRef<number>();

  const run = React.useCallback(() => {
    if (prefersReducedMotion()) {
      setOutput(text);
      return;
    }
    cancelAnimationFrame(frame.current ?? 0);
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const resolved = Math.floor(t * text.length);
      let next = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < resolved || ch === ' ') next += ch;
        else next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOutput(next);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
  }, [text, duration]);

  React.useEffect(() => {
    run();
    return () => cancelAnimationFrame(frame.current ?? 0);
  }, [run]);

  return [output, run] as const;
}
