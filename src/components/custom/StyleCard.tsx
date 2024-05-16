import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Style {
  image: StaticImageData;
  title: string;
}
type StyleCardProp = {
  style: Style;
  id: number;
};
const StyleCard = ({ style, id }: StyleCardProp) => {
  return (
    <Link
      className={`${
        id === 0
          ? "lg:col-span-2"
          : id === 1
          ? "lg:col-span-1"
          : id === 2
          ? "lg:col-span-2"
          : id === 3
          ? "lg:col-span-1"
          : id === 4
          ? "lg:col-span-2"
          : "lg:col-span-2"
      }`}
      href={"#"}
    >
      <Card>
        <CardContent className="h-48 overflow-hidden relative">
          <h2 className="absolute top-5 left-5 text-2xl font-bold">
            {style.title}
          </h2>
          <Image
            className="ml-auto"
            height={250}
            src={style.image}
            alt="style"
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default StyleCard;
