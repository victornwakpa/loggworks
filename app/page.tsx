import HeroSection from "./components/HeroSection";
import AllNav from "./components/1-Navbar";
import Secured from "./components/2-Secured";
import Popular from "./components/3-popular";
import ServiceOffer from "./components/4-serviceOffer";
import Services from "./components/5-services";
import SectionSix from "./components/6-section";
import ServiceOfferR from "./components/7-serviceOffer";
import Area from "./components/9-homeService";
import BottomBanner from "./components/10-banner";
import BlogSection from "./components/11-blogSection";
import Footer from "./components/12-footer";
import Testimonial from "./components/8-testimonial";


export default function Home() {
  return (
    <div className="font-inter">
      <AllNav />
      <HeroSection />
      <Secured />
      <Popular />
      <ServiceOffer />
      <Services />
      <SectionSix />
      <ServiceOfferR />
      <Testimonial />
      <Area />
      <BottomBanner />
      <BlogSection />
      <Footer />
    </div>
  );
}
