import techData from '../../data/techData';

function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {techData.map((t) => (
        <li key={t.title} className="chip">
          <img src={t.src} alt="" loading="lazy" />
          <span className="mono">{t.title}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label="Technologies">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default TechMarquee;
