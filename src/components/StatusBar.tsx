import { Theme } from '../hooks/useTheme';
import { useScrollProgress } from '../hooks/useActiveSection';
import { SectionId, sections } from '../data/siteData';
import { BranchIcon, CheckIcon, MoonIcon, SunIcon } from './Icons';
import './StatusBar.css';

interface StatusBarProps {
  theme: Theme;
  toggleTheme: () => void;
  active: SectionId;
}

function StatusBar({ theme, toggleTheme, active }: StatusBarProps) {
  const progress = useScrollProgress();
  const file = sections.find((s) => s.id === active)?.file ?? '';

  return (
    <footer className="statusbar mono" aria-label="Status bar">
      <div className="statusbar-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="statusbar-left">
        <span className="sb-item sb-branch">
          <BranchIcon /> master
        </span>
        <span className="sb-item sb-hide-sm">
          <CheckIcon /> 0 problems
        </span>
        <span className="sb-item sb-hide-xs">{file}</span>
      </div>
      <div className="statusbar-right">
        <span className="sb-item">{Math.round(progress * 100)}%</span>
        <span className="sb-item sb-hide-sm">UTF-8</span>
        <span className="sb-item sb-hide-sm">TypeScript React</span>
        <button
          type="button"
          className="sb-item sb-button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          {theme === 'dark' ? 'Dark+' : 'Light+'}
        </button>
      </div>
    </footer>
  );
}

export default StatusBar;
