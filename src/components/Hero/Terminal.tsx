import React from 'react';
import projectData from '../../data/projectData';
import techData from '../../data/techData';
import { links, SectionId } from '../../data/siteData';
import { prefersReducedMotion } from '../../hooks/useTextEffects';
import './Terminal.css';

interface TerminalProps {
  goTo: (id: SectionId) => void;
  toggleTheme: () => void;
}

interface Entry {
  id: number;
  cmd: string;
  output: React.ReactNode;
}

const COMMANDS: Record<string, string> = {
  help: 'list available commands',
  whoami: 'who is this guy?',
  neofetch: 'system info, but make it about me',
  about: 'jump to the about section',
  projects: 'list my projects',
  skills: 'languages & tools I use',
  contact: 'ways to reach me',
  resume: 'open my resume (pdf)',
  github: 'open my GitHub',
  linkedin: 'open my LinkedIn',
  theme: 'toggle light / dark',
  clear: 'clear the terminal',
};

const ASCII = [
  '██╗  ██╗ ██████╗',
  '██║ ██╔╝██╔════╝',
  '█████╔╝ ██║     ',
  '██╔═██╗ ██║     ',
  '██║  ██╗╚██████╗',
  '╚═╝  ╚═╝ ╚═════╝',
];

function Prompt() {
  return (
    <span className="term-prompt" aria-hidden>
      <span className="term-user">kyle@portfolio</span>
      <span className="term-sep">:</span>
      <span className="term-path">~</span>
      <span className="term-sep">$</span>{' '}
    </span>
  );
}

function Neofetch() {
  const rows: [string, string][] = [
    ['role', 'Software Developer'],
    ['location', 'Canada'],
    ['experience', '3+ yrs C# / .NET @ Conexiom'],
    ['education', 'Computer Engineering, Conestoga'],
    ['backend', 'C#, .NET, FastAPI, Node.js, REST APIs'],
    ['frontend', 'React, TypeScript, Redux, Tailwind'],
    ['data', 'SQL Server, PostgreSQL, SQLite'],
    ['also', 'Python, C, Docker, Linux'],
  ];
  return (
    <div className="neofetch">
      <pre className="neofetch-art" aria-hidden>
        {ASCII.join('\n')}
      </pre>
      <div className="neofetch-info">
        <div>
          <span className="term-user">kyle</span>@<span className="term-user">portfolio</span>
        </div>
        <div className="term-dim">-----------------</div>
        {rows.map(([k, v]) => (
          <div key={k}>
            <span className="term-key">{k}</span>: {v}
          </div>
        ))}
        <div className="neofetch-swatches" aria-hidden>
          {['--danger', '--syn-num', '--syn-string', '--accent', '--accent-2', '--syn-keyword', '--syn-prop'].map(
            (c) => (
              <span key={c} style={{ background: `var(${c})` }} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="term-link">
      {children}
    </a>
  );
}

function Terminal({ goTo, toggleTheme }: TerminalProps) {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [value, setValue] = React.useState('');
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const [autoplaying, setAutoplaying] = React.useState(true);
  const nextId = React.useRef(0);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const open = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  const run = React.useCallback(
    (raw: string) => {
      const input = raw.trim();
      const [cmd, ...args] = input.split(/\s+/);
      const name = cmd?.toLowerCase() ?? '';
      let output: React.ReactNode = null;

      switch (name) {
        case '':
          break;
        case 'help':
          output = (
            <div className="term-table">
              {Object.entries(COMMANDS).map(([c, d]) => (
                <React.Fragment key={c}>
                  <span className="term-cmd">{c}</span>
                  <span className="term-dim">{d}</span>
                </React.Fragment>
              ))}
            </div>
          );
          break;
        case 'whoami':
          output = 'Kyle Close — software developer based in Canada. Backend by trade, full-stack by habit.';
          break;
        case 'neofetch':
          output = <Neofetch />;
          break;
        case 'about':
          output = <span className="term-dim">→ opening about.md</span>;
          goTo('about');
          break;
        case 'projects':
        case 'ls':
          output = (
            <div className="term-table">
              {projectData.map((p) => (
                <React.Fragment key={p.name}>
                  <span className="term-cmd">{p.name.toLowerCase()}/</span>
                  <span>
                    {p.live && <ExtLink href={p.live}>live</ExtLink>}
                    {p.live && <span className="term-dim"> · </span>}
                    <ExtLink href={p.source}>source</ExtLink>
                  </span>
                </React.Fragment>
              ))}
            </div>
          );
          break;
        case 'skills':
          output = techData.map((t) => t.title).join('  ·  ');
          break;
        case 'contact':
          output = (
            <div className="term-table">
              <span className="term-cmd">email</span>
              <a className="term-link" href={`mailto:${links.email}`} target="_blank" rel="noopener noreferrer">
                {links.email}
              </a>
              <span className="term-cmd">github</span>
              <ExtLink href={links.github}>github.com/Kyle-Close</ExtLink>
              <span className="term-cmd">linkedin</span>
              <ExtLink href={links.linkedin}>linkedin.com/in/kyle-close</ExtLink>
            </div>
          );
          break;
        case 'resume':
          open(links.resume);
          output = <span className="term-dim">→ opening resume.pdf</span>;
          break;
        case 'github':
          open(links.github);
          output = <span className="term-dim">→ opening github.com/Kyle-Close</span>;
          break;
        case 'linkedin':
          open(links.linkedin);
          output = <span className="term-dim">→ opening linkedin</span>;
          break;
        case 'theme':
          toggleTheme();
          output = <span className="term-dim">theme toggled ✓</span>;
          break;
        case 'echo':
          output = args.join(' ');
          break;
        case 'date':
          output = new Date().toString();
          break;
        case 'pwd':
          output = '/home/kyle/portfolio';
          break;
        case 'sudo':
          output = <span className="term-err">kyle is not in the sudoers file. This incident will be reported.</span>;
          break;
        case 'rm':
          output = <span className="term-err">nice try.</span>;
          break;
        case 'exit':
          output = <span className="term-dim">there is no escape. try `contact` instead.</span>;
          break;
        case 'clear':
          setEntries([]);
          return;
        default:
          output = (
            <span>
              <span className="term-err">command not found: {cmd}</span>
              <span className="term-dim"> — type </span>
              <span className="term-cmd">help</span>
            </span>
          );
      }

      setEntries((prev) => [...prev, { id: nextId.current++, cmd: input, output }]);
      if (input) setHistory((prev) => [...prev, input]);
    },
    [goTo, toggleTheme],
  );

  // Type out a demo command on first load.
  React.useEffect(() => {
    if (!autoplaying) return;
    const demo = 'neofetch';

    const instant = prefersReducedMotion();
    const timers: number[] = [];
    if (!instant) {
      for (let i = 1; i <= demo.length; i++) {
        timers.push(window.setTimeout(() => setValue(demo.slice(0, i)), 900 + i * 90));
      }
    }
    timers.push(
      window.setTimeout(
        () => {
          run(demo);
          setValue('');
          setAutoplaying(false);
        },
        instant ? 0 : 900 + demo.length * 90 + 350,
      ),
    );
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplaying]);

  // Bring the newest output into view (from its first line) without scrolling the page.
  React.useEffect(() => {
    const body = bodyRef.current;
    const last = body?.querySelector<HTMLElement>('.term-entry:last-of-type');
    if (!body) return;
    body.scrollTop = last ? Math.min(last.offsetTop - 12, body.scrollHeight) : 0;
  }, [entries]);

  const stopAutoplay = () => {
    if (autoplaying) {
      setAutoplaying(false);
      setValue('');
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(value);
    setValue('');
    setHistoryIndex(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const i = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(i);
      setValue(history[i]);
    } else if (e.key === 'ArrowDown' && historyIndex >= 0) {
      e.preventDefault();
      const i = historyIndex + 1;
      if (i >= history.length) {
        setHistoryIndex(-1);
        setValue('');
      } else {
        setHistoryIndex(i);
        setValue(history[i]);
      }
    } else if (e.key === 'Tab' && value) {
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(value.toLowerCase()));
      if (match) {
        e.preventDefault();
        setValue(match);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div className="window term" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
      <div className="window-bar">
        <span className="window-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="window-title mono">kyle@portfolio: ~</span>
        <span className="window-dots-spacer" />
      </div>

      <div className="term-body mono" ref={bodyRef} aria-live="polite">
        <div className="term-dim term-welcome">
          Welcome! This terminal works — type <span className="term-cmd">help</span> to explore.
        </div>
        {entries.map((entry) => (
          <div key={entry.id} className="term-entry">
            <div>
              <Prompt />
              <span>{entry.cmd}</span>
            </div>
            {entry.output && <div className="term-output">{entry.output}</div>}
          </div>
        ))}

        <form className="term-input-row" onSubmit={onSubmit}>
          <Prompt />
          <label htmlFor="term-input" className="sr-only">
            Terminal command
          </label>
          <input
            id="term-input"
            ref={inputRef}
            className="term-input"
            value={value}
            onChange={(e) => {
              stopAutoplay();
              setValue(e.target.value);
            }}
            onFocus={stopAutoplay}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            placeholder={autoplaying ? '' : "try 'help'"}
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
