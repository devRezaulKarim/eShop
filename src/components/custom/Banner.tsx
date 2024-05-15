import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import heroImg from "@/assets/hero.png";
import star from "@/assets/star.png";

interface Stats {
  counts: number;
  title: string;
}

const Banner = () => {
  const statistics: Stats[] = [
    {
      counts: 200,
      title: "International Brands",
    },
    {
      counts: 2000,
      title: "High Quality Products",
    },
    {
      counts: 30000,
      title: "Happy Customers",
    },
  ];
  return (
    <section className="container pt-10 bg-[#f0f0f0] lg:flex items-center">
      <div className="lg:w-1/2">
        <h1 className="uppercase text-3xl lg:text-6xl font-black lg:w-[80%]">
          Find cloths that matches your style
        </h1>
        <p className="my-4 lg:w-[80%] text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          laboriosam velit architecto beatae fugiat vitae dolorem delectus et
          perspiciatis in.
        </p>
        <Button className="rounded-full px-12">Shop Now</Button>
        <div className="mt-8 flex lg:divide-x-2 flex-wrap justify-center lg:justify-start gap-y-4 lg:gap-y-0">
          {statistics.map((stat, i) => (
            <div
              className={`flex flex-col px-6 ${i === 0 && "pl-0"}`}
              key={stat.title}
            >
              <span className="text-2xl font-semibold">{`${stat.counts.toLocaleString()}+`}</span>{" "}
              <span className="text-xs ">{stat.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 relative overflow-hidden h-80 lg:h-auto">
        <Image
          className=" mx-auto lg:ml-auto lg:mr-20"
          width={200}
          src={heroImg}
          alt="A man standing"
        />
        <Image
          className="ml-auto absolute top-0 left-1/4 hidden lg:block"
          width={150}
          src={heroImg}
          alt="A man standing"
        />
        <Image
          className="absolute top-5 lg:top-1/2 lg:translate-y-1/2 star"
          src={star}
          alt="star"
        />
        <Image
          className="absolute right-3 bottom-5  lg:top-5 lg:right-10 star-2"
          width={75}
          src={star}
          alt="star"
        />
      </div>
    </section>
  );
};

export default Banner;
