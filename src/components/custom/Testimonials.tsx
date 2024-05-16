"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

interface Review {
  userName: string;
  comment: string;
  rating: number;
}

const Testimonials = () => {
  let sliderRef = useRef(null);

  const reviews: Review[] = [
    {
      userName: "Sarah M.",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea porro harum, natus quae id.",
      rating: 4,
    },
    {
      userName: "Alex K.",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea porro harum, natus quae id.",
      rating: 5,
    },
    {
      userName: "James L.",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea porro harum, natus quae id.",
      rating: 4.5,
    },
    {
      userName: "Moses",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea porro harum, natus quae id.",
      rating: 4,
    },
    {
      userName: "Adam",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea porro harum, natus quae id.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container py-10 ">
      <h2 className="uppercase text-3xl lg:text-4xl text-center font-black mb-8">
        What Our Happy customers Says
      </h2>
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div key={review.userName}>
            <div className="border mx-2 p-8 rounded-3xl">
              <div className="flex gap-1">{renderStars(review.rating)}</div>
              <h3 className="my-2 text-lg font-bold flex items-center gap-1">
                <span>{review.userName}</span>
                <FaCheckCircle className="text-green-500" />
              </h3>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
