import React from 'react';

const KEYWORDS = new Set([
  'const', 'let', 'interface', 'export', 'default', 'import', 'from', 'return', 'type', 'function', 'true', 'false',
]);
const TYPES = new Set(['string', 'number', 'boolean', 'Developer']);

// Minimal TypeScript-ish tokenizer — just enough to colour the snippet.
const TOKEN = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(\b\d+\b)|([A-Za-z_$][\w$]*)(\s*:)?|([{}[\]();,.=:<>|])|(\s+)|(.)/gm;

function highlight(line: string) {
  const out: React.ReactNode[] = [];
  let m: RegExpExecArray | null;
  let i = 0;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(line))) {
    const [full, comment, str, num, ident, colon, punct] = m;
    const key = i++;
    if (comment) out.push(<span key={key} className="tok-comment">{comment}</span>);
    else if (str) out.push(<span key={key} className="tok-string">{str}</span>);
    else if (num) out.push(<span key={key} className="tok-num">{num}</span>);
    else if (ident) {
      const cls = KEYWORDS.has(ident)
        ? 'tok-keyword'
        : TYPES.has(ident)
          ? 'tok-type'
          : colon
            ? 'tok-prop'
            : undefined;
      out.push(<span key={key} className={cls}>{ident}</span>);
      if (colon) out.push(<span key={`${key}c`} className="tok-punct">{colon}</span>);
    } else if (punct) out.push(<span key={key} className="tok-punct">{punct}</span>);
    else out.push(full);
  }
  return out;
}

function CodeWindow({ filename, code }: { filename: string; code: string }) {
  const lines = code.split('\n');
  return (
    <div className="window code-window">
      <div className="window-bar">
        <span className="window-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="window-title mono">src/{filename}</span>
        <span className="window-dots-spacer" />
      </div>
      <pre className="code-body mono">
        <code>
          {lines.map((line, n) => (
            <span className="code-line" key={n}>
              <span className="code-ln" aria-hidden>
                {n + 1}
              </span>
              <span className="code-text">{highlight(line)}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default CodeWindow;
