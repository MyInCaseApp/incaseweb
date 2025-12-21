import Banner from "./Banner";
import Choose from "./Choose";
import Contact from "./Contact";
import Hero from "./Hero";
import Store from "./Store";
import Who from "./Who";

export default function About() {
  return (
    <section>
      <Hero />
      <div className="bg-[#F9F9F9E5] lg:bg-transparent">
        <Who />
        <Store />
        <Contact />
      </div>
      <Choose />
      <Banner />
    </section>
  );
}
