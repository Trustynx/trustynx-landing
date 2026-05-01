import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import HowItWorks from "./section/HowItWorks";
import RealValue from "./section/RealValue";
import TrustModel from "./section/TrustModel";
import FAQs from "./section/FAQs";
import JoinIn from "./section/JoinIn";
import Footer from "./section/Footer";

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
