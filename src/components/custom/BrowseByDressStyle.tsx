import styleImage from "@/assets/t-shirt.jpg";
import { StaticImageData } from "next/image";
import StyleCard from "./StyleCard";

interface Style {
  image: StaticImageData;
  title: string;
}

const BrowseByDressStyle = () => {
  const styles: Style[] = [
    {
      image: styleImage,
      title: "Casual",
    },
    {
      image: styleImage,
      title: "Formal",
    },
    {
      image: styleImage,
      title: "Party",
    },
    {
      image: styleImage,
      title: "Sports",
    },
  ];
  return (
    <section className="container p-8">
      <div className="bg-[#f0f0f0] px-8  rounded-3xl pt-8">
        <h2 className="uppercase text-3xl lg:text-4xl text-center font-black">
          Browse by dress style
        </h2>
        <div className="mt-6 pb-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {styles.map((style) => (
            <StyleCard key={style.title} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
