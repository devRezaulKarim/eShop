import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: string[];
  title: string;
}
const DetailsPageImage = ({ images, title }: Props) => {
  const [previewImg, setPreviewImg] = useState<string>(images[0]);
  const handlePreviewImg = (url: string) => {
    setPreviewImg(url);
  };
  return (
    <div className="md:w-1/2 flex items-center">
      <div className="flex flex-col gap-2 h-96 overflow-y-scroll no-scrollbar border-2 border-gray-500 p-1 rounded-lg">
        {images.map((img) => (
          <div
            className={`border-4 p-1 rounded-lg   ${
              previewImg === img ? "border-black" : "border-gray-100"
            }`}
            onClick={() => handlePreviewImg(img)}
            key={img}
          >
            <Image src={img} alt={title} width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="w-4/5 p-4">
        <Image
          src={previewImg}
          alt={title}
          width={200}
          height={200}
          className="w-full h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default DetailsPageImage;
