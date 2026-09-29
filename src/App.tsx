import React from 'react';
import Background from './components/Background';
import TabBar from './components/TabBar';
import StatusBar from './components/StatusBar';
import CommandPalette, { PaletteAction } from './components/CommandPalette';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import projectData from './data/projectData';
import { links, sections, SectionId } from './data/siteData';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection();
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = React.useCallback((id: SectionId) => {
    if (id === 'home') window.scrollTo({ top: 0 });
    else document.getElementById(id)?.scrollIntoView();
  }, []);

  const actions = React.useMemo<PaletteAction[]>(() => {
    const open = (url: string) => () => window.open(url, '_blank', 'noopener,noreferrer');
    return [
      ...sections.map((s) => ({ id: `go-${s.id}`, group: 'Go to', label: s.file, run: () => goTo(s.id) })),
      ...projectData
        .filter((p) => p.live)
        .map((p) => ({ id: `live-${p.name}`, group: 'Open', label: `${p.name} (live demo)`, hint: '↗', run: open(p.live) })),
      { id: 'resume', group: 'Open', label: 'Resume (PDF)', hint: '↗', run: open(links.resume) },
      { id: 'github', group: 'Open', label: 'GitHub', hint: '↗', run: open(links.github) },
      { id: 'linkedin', group: 'Open', label: 'LinkedIn', hint: '↗', run: open(links.linkedin) },
      {
        id: 'email',
        group: 'Contact',
        label: 'Send an email',
        run: open(`mailto:${links.email}`),
      },
      {
        id: 'theme',
        group: 'Preferences',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        run: toggleTheme,
      },
    ];
  }, [goTo, theme, toggleTheme]);

  return (
    <>
      <a href="#about" className="sr-only">
        Skip to content
      </a>
      <Background />
      <TabBar active={active} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero goTo={goTo} toggleTheme={toggleTheme} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <StatusBar theme={theme} toggleTheme={toggleTheme} active={active} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} actions={actions} />
    </>
  );
}

export default App;
