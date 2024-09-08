import Navbar from "./navbar";
import HeroSection from "./herosection";
import FeatureSection from "./featureSection";
import WorkFlow from "./workFlow";
import Footer from "./footer";
import Pricing from "./pricing";
import Testimonials from "./testimonials";
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
