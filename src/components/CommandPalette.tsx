import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon } from './Icons';
import './CommandPalette.css';

export interface PaletteAction {
  id: string;
  label: string;
  group: string;
  hint?: string;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  actions: PaletteAction[];
}

function CommandPalette({ open, onClose, actions }: CommandPaletteProps) {
  const [query, setQuery] = React.useState('');
  const [selected, setSelected] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const restoreFocus = React.useRef<HTMLElement | null>(null);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.group} ${a.label}`.toLowerCase().includes(q));
  }, [query, actions]);

  React.useEffect(() => {
    if (open) {
      restoreFocus.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setSelected(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      restoreFocus.current?.focus?.({ preventScroll: true });
    }
  }, [open]);

  React.useEffect(() => setSelected(0), [query]);

  const execute = (action?: PaletteAction) => {
    if (!action) return;
    onClose();
    // Let the dialog close before scrolling / opening tabs.
    requestAnimationFrame(action.run);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => (results.length ? (s + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => (results.length ? (s - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      execute(results[selected]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Tab') {
      // Only the input is focusable inside the dialog.
      e.preventDefault();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="palette-search">
              <SearchIcon />
              <input
                ref={inputRef}
                className="mono"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={results[selected] ? `palette-${results[selected].id}` : undefined}
                autoComplete="off"
                spellCheck={false}
              />
              <kbd>esc</kbd>
            </div>

            <ul className="palette-list" id="palette-list" role="listbox">
              {results.length === 0 && <li className="palette-empty mono">No matching commands</li>}
              {results.map((a, i) => (
                <li
                  key={a.id}
                  id={`palette-${a.id}`}
                  role="option"
                  aria-selected={i === selected}
                  className={`palette-item${i === selected ? ' is-selected' : ''}`}
                  onMouseMove={() => setSelected(i)}
                  onClick={() => execute(a)}
                >
                  <span className="palette-group mono">{a.group}:</span>
                  <span className="palette-label">{a.label}</span>
                  {a.hint && <span className="palette-hint mono">{a.hint}</span>}
                </li>
              ))}
            </ul>

            <div className="palette-foot mono">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> navigate
              </span>
              <span>
                <kbd>↵</kbd> run
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
