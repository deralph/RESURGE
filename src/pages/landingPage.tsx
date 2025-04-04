import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import NewArrivalsSection from "../components/NewArrivalsSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <NewArrivalsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
