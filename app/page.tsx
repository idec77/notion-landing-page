import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeTemplates from "@/components/FreeTemplates";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreeTemplates />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
