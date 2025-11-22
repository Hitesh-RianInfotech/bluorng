import Image from "next/image";
import Footer from "./components/Footer";
import ScrollingBanner from "./components/ScrollingBanner";
import StoreGallery from "./components/StoreGallery";
import ProductGrid from "./components/ProductCollection";
import LatestDrop from "./components/LatestDrop";
import AutoplayVideo from "./components/AutoplayVideo";
import Navbar from "./components/NavbarWithCustomGif";
import NavbarWithCustomGif from "./components/NavbarWithCustomGif";
import HomeBackgroundVideo from "./components/HomeBackgroundVideo";

export default function Home() {
  return (
    <>
    <HomeBackgroundVideo/>
    <div className="relative z-10">
      <LatestDrop/>
      <AutoplayVideo/>
      <ProductGrid/>
      <StoreGallery/>
      <ScrollingBanner/>
    </div>
    </>
  );
}
