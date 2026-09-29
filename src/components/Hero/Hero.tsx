import { motion } from 'framer-motion';
import { links, SectionId } from '../../data/siteData';
import { useScramble } from '../../hooks/useTextEffects';
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../Icons';
import Terminal from './Terminal';
import './Hero.css';

interface HeroProps {
  goTo: (id: SectionId) => void;
  toggleTheme: () => void;
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Hero({ goTo, toggleTheme }: HeroProps) {
  const [first, replayFirst] = useScramble('KYLE', 900);
  const [last, replayLast] = useScramble('CLOSE', 1200);

  const replay = () => {
    replayFirst();
    replayLast();
  };

  return (
    <section id="home" className="hero container">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.p variants={rise} className="hero-comment mono">
          <span className="tok-comment">// hello, world — my name is</span>
        </motion.p>

        <motion.h1 variants={rise} className="hero-name mono" onMouseEnter={replay} aria-label="Kyle Close">
          <span aria-hidden>{first}</span>
          <span aria-hidden>
            {last}
            <span className="hero-name-dot">.</span>
          </span>
        </motion.h1>

        <motion.p variants={rise} className="hero-role mono">
          <span className="tok-keyword">const</span> <span className="tok-prop">role</span>{' '}
          <span className="tok-punct">=</span> <span className="tok-string">"Software Developer"</span>
          <span className="tok-punct">;</span>
        </motion.p>


        <motion.div variants={rise} className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            <ArrowDownIcon /> view_projects()
          </a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn">
            <DownloadIcon /> resume.pdf
          </a>
        </motion.div>

        <motion.div variants={rise} className="hero-meta mono">
          <span className="hero-status">
            <span className="pulse" aria-hidden /> Based in Canada
          </span>
          <span className="hero-socials">
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${links.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
              <MailIcon />
            </a>
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-terminal"
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Terminal goTo={goTo} toggleTheme={toggleTheme} />
      </motion.div>
    </section>
  );
}

export default Hero;
