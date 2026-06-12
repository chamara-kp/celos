import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Addons from "./sections/Addons";
import WhyUs from "./sections/WhyUs";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import ServiceNotes from "./sections/ServiceNotes";
import Contact from "./sections/Contact";
import SpecialCategoryPackages from "./sections/SpecialCategoryPackages";
import Portfolio from "./sections/Portfolio";
import TrustedBy from "./sections/TrustedBy";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />
        <WhyUs />
        <Services />
        <Portfolio />

        <SpecialCategoryPackages />

        <Addons />

        <Team />

        <Testimonials />
        <ServiceNotes />
        <Contact />
        <TrustedBy />
      </main>

      <Footer />
    </>
  );
}
