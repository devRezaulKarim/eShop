import Banner from "@/components/custom/Banner";
import Brands from "@/components/custom/Brands";
import BrowseByDressStyle from "@/components/custom/BrowseByDressStyle";
import NewArrivals from "@/components/custom/NewArrivals";
import Testimonials from "@/components/custom/Testimonials";
import TopSelling from "@/components/custom/TopSelling";

export default function Home() {
  return (
    <main>
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <Testimonials />
    </main>
  );
}
