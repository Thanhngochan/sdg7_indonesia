import { challenges } from "../data.js";
import Footprint from "./Footprint.jsx";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Footprint className="hero-foot left" />
      <Footprint className="hero-foot right" flip />
      <p className="tag">SDG 7 · Affordable and Clean Energy</p>
      <h1>
        No carbon footprint in <span className="red">Indonesia</span>
      </h1>
      <p className="question">
        – Is it <span className="green">possible</span>? –
      </p>
      <ol className="chain">
        {challenges.map((c) => (
          <li key={c.id}>
            <a href={`#${c.anchor}`}>
              <b>{c.id}</b>
              {c.title}
            </a>
          </li>
        ))}
      </ol>
    </header>
  );
}
