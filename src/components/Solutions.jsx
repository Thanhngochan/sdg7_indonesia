import { responses } from "../data.js";

export default function Solutions() {
  const covered = responses.filter((r) => !r.gap).length;
  return (
    <section className="section" id="solutions">
      <p className="eyebrow">Second question</p>
      <h2>How to solve these problems?</h2>
      <p className="lead">
        Addressing these issues requires integrated policies, improved infrastructure, and financial mechanisms to
        support a sustainable energy transition.
      </p>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th className="green">Problem</th>
              <th className="red">Government approach</th>
              <th className="brown">SDG 7</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((r) => (
              <tr key={r.problem} className={r.gap ? "gap" : ""}>
                <th scope="row">{r.problem}</th>
                <td>{r.approach}</td>
                <td>
                  <span className="pill">{r.target}{r.gap ? " gap" : ""}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="verdict">
        <b>{covered} of {responses.length}</b> problems have a government response. Surging demand is the one left
        open: no efficiency measure was found, leaving target <b>7.3</b> as the gap.
      </p>
    </section>
  );
}
