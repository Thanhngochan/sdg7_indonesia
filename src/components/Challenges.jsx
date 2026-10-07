import { challenges, demand, supply, renewables, mix, barriers } from "../data.js";
import { DemandBars, SplitBar, Donut } from "./Charts.jsx";
import Footprint from "./Footprint.jsx";

function Card({ n, wide, children }) {
  const c = challenges[n - 1];
  return (
    <article className={`card${wide ? " wide" : ""}`} id={c.anchor}>
      <div className="card-head">
        <span className="num">{c.id}</span>
        <h3>{c.title}</h3>
      </div>
      <p className="card-text">
        {c.text}{" "}
        <span className="cite">
          {c.src.map((s) => (
            <a key={s} href={`#ref-${s}`}>({s})</a>
          ))}
        </span>
      </p>
      {children}
    </article>
  );
}

export default function Challenges() {
  return (
    <section className="section" id="challenges">
      <p className="eyebrow">First question</p>
      <h2>What energy challenges does Indonesia face?</h2>

      <div className="grid">
        <Card n={1}>
          <DemandBars {...demand} />
        </Card>

        <Card n={2}>
          <div className="big">
            <span className="red">{supply.domestic}%</span>
            <small>of annual fuel demand met by domestic production</small>
          </div>
          <SplitBar
            parts={[
              { label: "Domestic", value: `${supply.domestic}%`, pct: supply.domestic, tone: "red" },
              { label: "Imports", value: `${supply.imports}%`, pct: supply.imports, tone: "green" },
            ]}
          />
        </Card>

        <Card n={3} wide>
          <div className="mix">
            <div className="stat brown">
              <b>{mix.coal}</b>
              <span>coal share of the energy mix</span>
            </div>
            <div className="mix-centre">
              <Footprint className="mix-foot" />
              <Donut fossil={mix.fossil} other={mix.other} />
              <Footprint className="mix-foot" flip />
            </div>
            <div className="stat brown">
              <b>{mix.co2}</b>
              <span>of national CO₂ emissions from electricity</span>
            </div>
          </div>
        </Card>

        <Card n={4} wide>
          <div className="big">
            <span className="green">{renewables.untappedGW} GW</span>
            <small>of {renewables.totalGW} GW renewable potential still untapped</small>
          </div>
          <SplitBar
            parts={[
              { label: `In use (${renewables.usedPct}%)`, value: `${renewables.usedGW} GW`, pct: renewables.usedPct, tone: "red" },
              { label: `Untapped (${renewables.untappedPct}%)`, value: `${renewables.untappedGW} GW`, pct: renewables.untappedPct, tone: "green" },
            ]}
          />
        </Card>

        <Card n={5} wide>
          <div className="blobs">
            {barriers.map((b) => (
              <div key={b.name} className={`blob ${b.tone}`}>
                <h4>{b.name}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
