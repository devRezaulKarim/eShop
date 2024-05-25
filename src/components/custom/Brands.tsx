import brands1 from "@/assets/brand1.png";
import brands2 from "@/assets/brand2.png";
import brands3 from "@/assets/brand3.png";
import brands4 from "@/assets/brand4.png";
import brands5 from "@/assets/brand5.png";
import Image, { StaticImageData } from "next/image";

type BrandImage = StaticImageData;
const Brands = () => {
  const brands: BrandImage[] = [brands1, brands2, brands3, brands4, brands5];
  return (
    <section className="container bg-black flex flex-wrap justify-center gap-4 lg:justify-between items-center py-8">
      {brands.map((logo, i) => (
        <>
          <Image
            className="lg:hidden"
            width={90}
            key={i}
            src={logo}
            alt="brand logo"
          />
          <Image
            className="hidden lg:block"
            key={i}
            src={logo}
            alt="brand logo"
          />
        </>
      ))}
    </section>
  );
};

export default Brands;
