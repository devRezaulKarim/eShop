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
};
const StyleCard = ({ style }: StyleCardProp) => {
  return (
    <Link href={"#"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{style.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className="mx-auto"
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
