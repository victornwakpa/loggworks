import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <HeroSection />
    </div>
  );
}