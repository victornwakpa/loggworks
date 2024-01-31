import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Secured from "./components/2-Secured";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-inter">
      <TopNav />
      <Navbar />
      <HeroSection />
      <Secured />
    </div>
  );
}
