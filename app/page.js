import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Plans from "./sections/Plans";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Travels from "./sections/Travels";

export default function Home() {
  return (
    <>
      <Hero />
      <Travels />
      <Services />
      <Plans />
      <Reviews />
      <Contact />
    </>
  );
}
