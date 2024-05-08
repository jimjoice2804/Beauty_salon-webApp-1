import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import PhotoGallary from "@/components/PhotoGallary";
import SecondBanner from "@/components/SecondBanner";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <Service />
      <SecondBanner />
      <PhotoGallary />
      <Footer />
    </div>
  );
}
