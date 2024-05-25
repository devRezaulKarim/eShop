import casual from "@/assets/dress-style/Casual.png";
import formal from "@/assets/dress-style/Formal.png";
import party from "@/assets/dress-style/party.png";
import traditional from "@/assets/dress-style/traditional.png";
import vacation from "@/assets/dress-style/Vacation.png";
import sports from "@/assets/dress-style/sports.png";
import { StaticImageData } from "next/image";
import StyleCard from "./StyleCard";

interface Style {
  image: StaticImageData;
  title: string;
}

const BrowseByDressStyle = () => {
  const styles: Style[] = [
    {
      image: casual,
      title: "Casual",
    },
    {
      image: formal,
      title: "Formal",
    },
    {
      image: party,
      title: "Party",
    },
    {
      image: traditional,
      title: "Traditional",
    },
    {
      image: vacation,
      title: "Vacation",
    },
    {
      image: sports,
      title: "Sports",
    },
  ];
  return (
    <section className="container p-8">
      <div className="bg-[#f0f0f0] px-8  rounded-3xl pt-8">
        <h2 className="uppercase text-3xl lg:text-4xl text-center font-black">
          Browse by dress style
        </h2>
        <div className="mt-6 pb-8 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {styles.map((style, i) => (
            <StyleCard key={style.title} id={i} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
