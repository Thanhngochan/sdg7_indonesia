import { references } from "../data.js";

export default function References() {
  return (
    <section className="section" id="references">
      <h2>References</h2>
      <ol className="refs">
        {references.map((r) => (
          <li key={r.key} id={`ref-${r.key}`}>
            <span className="ref-key">({r.key})</span>
            <span>
              {r.text}{" "}
              <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noreferrer">doi:{r.doi}</a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
