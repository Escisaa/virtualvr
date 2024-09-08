import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import FeatureSection from "./components/featureSection";
import WorkFlow from "./components/workFlow";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
