import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

interface SectionProps {
  id: string;
  index: string;
  file: string;
  caption: string;
  children: React.ReactNode;
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Section({ id, index, file, caption, children }: SectionProps) {
  const [name, ext] = file.split('.');
  return (
    <section id={id} className="section container">
      <Reveal>
        <div className="section-head">
          <span className="section-index mono">{index}</span>
          <h2 className="section-title mono">
            {name}
            <span className="section-ext">.{ext}</span>
          </h2>
          <span className="section-rule" aria-hidden />
        </div>
        <p className="section-caption mono tok-comment">{caption}</p>
      </Reveal>
      {children}
    </section>
  );
}

export default Section;
