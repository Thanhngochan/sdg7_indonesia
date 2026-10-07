import useInView from "../useInView.js";

// Two-column bar chart: demand index today vs in 10 years.
export function DemandBars({ today, future, max }) {
  const [ref, seen] = useInView();
  const ticks = [0, 50, 100, 150, 200];
  const bars = [
    { label: "Today", value: today, tone: "red" },
    { label: "In 10 years", value: future, tone: "green" },
  ];
  return (
    <figure className="bars" ref={ref}>
      <div className="bars-plot" role="img" aria-label={`Electricity demand index: ${today} today, ${future} in 10 years`}>
        {ticks.map((t) => (
          <span key={t} className="tick" style={{ bottom: `${(t / max) * 100}%` }}>
            <i>{t}</i>
          </span>
        ))}
        {bars.map((b) => (
          <div key={b.label} className="bar-col">
            <div className={`bar ${b.tone}`} style={{ height: seen ? `${(b.value / max) * 100}%` : 0 }}>
              <strong>{b.value}</strong>
            </div>
          </div>
        ))}
      </div>
      <div className="bars-labels">
        {bars.map((b) => (
          <span key={b.label}>{b.label}</span>
        ))}
      </div>
      <figcaption>Electricity demand, indexed (today = 100)</figcaption>
    </figure>
  );
}

// One horizontal bar split into two labelled parts.
export function SplitBar({ parts }) {
  const [ref, seen] = useInView();
  return (
    <div className="split" ref={ref}>
      <div className="split-track">
        {parts.map((p) => (
          <div key={p.label} className={`split-part ${p.tone}`} style={{ width: seen ? `${Math.max(p.pct, 2)}%` : 0 }} />
        ))}
      </div>
      <ul className="split-legend">
        {parts.map((p) => (
          <li key={p.label}>
            <span className={`dot ${p.tone}`} />
            <b>{p.value}</b> {p.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Donut: share of electricity from fossil fuels.
export function Donut({ fossil, other }) {
  const [ref, seen] = useInView();
  const r = 80;
  const c = 2 * Math.PI * r;
  return (
    <figure className="donut" ref={ref}>
      <svg viewBox="0 0 220 220" role="img" aria-label={`Electricity generation: ${fossil}% fossil fuels, ${other}% other sources`}>
        <circle cx="110" cy="110" r={r} className="donut-other" />
        <circle
          cx="110"
          cy="110"
          r={r}
          className="donut-fossil"
          strokeDasharray={`${seen ? (fossil / 100) * c - 3 : 0} ${c}`}
          transform="rotate(-90 110 110) scale(1 -1) translate(0 -220)"
        />
        <text x="110" y="106" textAnchor="middle" className="donut-num">{fossil}%</text>
        <text x="110" y="128" textAnchor="middle" className="donut-cap">fossil fuels</text>
      </svg>
      <ul className="split-legend center">
        <li><span className="dot red" /><b>{fossil}%</b> Fossil fuels</li>
        <li><span className="dot green" /><b>{other}%</b> Other sources</li>
      </ul>
      <figcaption>Electricity generation, 2018</figcaption>
    </figure>
  );
}
