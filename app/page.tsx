import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeTemplates from "@/components/FreeTemplates";
import PaidTemplates from "@/components/PaidTemplates";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreeTemplates />
        <PaidTemplates />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
