import Section, { Reveal } from '../Section';
import techData from '../../data/techData';
import CodeWindow from './CodeWindow';
import TechMarquee from './TechMarquee';
import './About.css';

const PROFILE = `// the short version
const kyle = {
  name: "Kyle Close",
  location: "Canada",
  education: "Computer Engineering @ Conestoga",
  experience: {
    company: "Conexiom",
    years: "3+",
    focus: ["C#", ".NET", "SQL Server", "REST APIs"],
  },
  sideProjects: ["React", "TypeScript", "FastAPI", "Node.js"],
  openTo: ["opportunities", "talking shop"],
} as const;

export default kyle;`;

const STATS = [
  { value: '3+', label: 'years shipping backend code' },
  { value: String(techData.length), label: 'languages & tools in rotation' },
  { value: '∞', label: 'side projects in progress' },
];

function About() {
  return (
    <Section id="about" index="01" file="about.md" caption="/* who I am & what I work with */">
      <div className="about-grid">
        <Reveal className="about-copy">
          <p className="about-lead">
            I'm Kyle, a software developer based in Canada with a Computer Engineering diploma from Conestoga
            College.
          </p>
          <p>
            I spent <strong>3+ years at Conexiom</strong> building and maintaining backend services in{' '}
            <strong>C# and .NET</strong>, working with SQL Server, REST APIs, and automated data processing
            pipelines.
          </p>
          <p>
            Outside of work I build full-stack projects with React and TypeScript on the front end and .NET, FastAPI, or
            Node.js behind them. Below you'll find a few of those projects.
          </p>

          <dl className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="about-stat">
                <dt className="mono">{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="about-code">
          <CodeWindow filename="kyle.ts" code={PROFILE} />
        </Reveal>
      </div>

      <Reveal>
        <h3 className="about-subhead mono">
          <span className="tok-keyword">import</span> <span className="tok-punct">{'{'}</span> stack{' '}
          <span className="tok-punct">{'}'}</span> <span className="tok-keyword">from</span>{' '}
          <span className="tok-string">"./toolbox"</span>
        </h3>
        <TechMarquee />
      </Reveal>
    </Section>
  );
}

export default About;
