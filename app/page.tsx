import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeTemplates from "@/components/FreeTemplates";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreeTemplates />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
