import Image from "next/image";
import Footer from "./components/Footer";
import ScrollingBanner from "./components/ScrollingBanner";
import StoreGallery from "./components/StoreGallery";
import ProductGrid from "./components/ProductGrid";
import LatestDrop from "./components/LatestDrop";
import AutoplayVideo from "./components/AutoplayVideo";
import Navbar from "./components/NavbarWithCustomGif";
import NavbarWithCustomGif from "./components/NavbarWithCustomGif";
import HomeBackgroundVideo from "./components/HomeBackgroundVideo";

export default function Home() {
  return (
    <>
    <NavbarWithCustomGif/>
    <HomeBackgroundVideo/>
    {/* Spacer to push content below the video */}
    <div className="relative h-screen min-h-[600px]" />
    <div className="relative z-10">
      <LatestDrop/>
      <AutoplayVideo/>
      <ProductGrid/>
      <StoreGallery/>
      <ScrollingBanner/>
      <Footer/>
    </div>
    </>
  );
}
