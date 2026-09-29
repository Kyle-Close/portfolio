import React from 'react';
import './Background.css';

/** Fixed grid backdrop with a soft spotlight that follows the pointer. */
function Background() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--mx', `${e.clientX}px`);
        ref.current?.style.setProperty('--my', `${e.clientY}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div className="bg" ref={ref} aria-hidden>
      <div className="bg-grid" />
      <div className="bg-spot" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
    </div>
  );
}

export default Background;
