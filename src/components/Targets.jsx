import { targets } from "../data.js";

export default function Targets() {
  return (
    <section className="section" id="sdg7">
      <p className="eyebrow">Link to the goals</p>
      <h2>SDG 7: Affordable and Clean Energy</h2>
      <div className="targets">
        {targets.map((t) => (
          <article key={t.code} className={`target${t.gap ? " gap" : ""}`}>
            <span className="target-code">{t.code}</span>
            <h3>{t.name}</h3>
            <p>{t.text}</p>
            {t.gap && <span className="pill">Gap in Indonesia</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
