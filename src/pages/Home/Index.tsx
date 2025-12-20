import About from "./About";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Who from "./Who";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Solutions />
      <Who />
      <FAQ />
    </div>
  );
}
