import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Challenges from "./components/Challenges.jsx";
import Solutions from "./components/Solutions.jsx";
import Targets from "./components/Targets.jsx";
import References from "./components/References.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Challenges />
        <Solutions />
        <Targets />
        <References />
      </main>
      <footer className="footer">SDG 7 · Affordable and Clean Energy · Indonesia case study</footer>
    </>
  );
}
