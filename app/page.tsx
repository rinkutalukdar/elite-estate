import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectIntro from "../components/ProjectIntro";
import Masterplan from "../components/Masterplan";
import Residences from "../components/Residences";
import Amenities from "../components/Amenities";
import Exclusivity from "../components/Exclusivity";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectIntro />
      <Masterplan />
      <Residences />
      <Amenities />
      <Exclusivity />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
