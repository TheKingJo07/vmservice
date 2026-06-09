import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { WhatsappFab } from "../components/WhatsappFab";
import { ScrollProgress } from "../components/ScrollProgress";

export function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsappFab />
    </>
  );
}
