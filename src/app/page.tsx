import Navbar from "@/components/inc/Navbar";
import FAQs from "@/section/FAQs";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import HowItWorks from "@/section/HowItWorks";
import JoinIn from "@/section/JoinIn";
import RealValue from "@/section/RealValue";
import TrustModel from "@/section/TrustModel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <RealValue />
      <TrustModel />
      <FAQs />
      <JoinIn />
      <Footer />
    </>
  );
}
