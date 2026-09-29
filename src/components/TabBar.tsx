import { sections, SectionId } from '../data/siteData';
import { SearchIcon } from './Icons';
import './TabBar.css';

interface TabBarProps {
  active: SectionId;
  onOpenPalette: () => void;
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

function TabBar({ active, onOpenPalette }: TabBarProps) {
  return (
    <header className="tabbar">
      <div className="tabbar-inner">
        <a href="#home" className="tabbar-logo mono" aria-label="Kyle Close — back to top">
          <span className="tabbar-logo-bracket">&lt;</span>kc<span className="tabbar-logo-bracket">/&gt;</span>
        </a>

        <nav className="tabs" aria-label="Sections">
          {sections.map((s) => {
            const [name, ext] = s.file.split('.');
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`tab mono${active === s.id ? ' is-active' : ''}`}
                aria-current={active === s.id ? 'location' : undefined}
              >
                <span className={`file-dot lang-${s.lang}`} aria-hidden />
                <span>
                  {name}
                  <span className="tab-ext">.{ext}</span>
                </span>
              </a>
            );
          })}
        </nav>

        <button type="button" className="palette-trigger mono" onClick={onOpenPalette}>
          <SearchIcon />
          <span className="palette-trigger-label">Search</span>
          <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
        </button>
      </div>
    </header>
  );
}

export default TabBar;
