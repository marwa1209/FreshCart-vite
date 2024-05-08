/** @format */

import { useCategories } from "@/services/queries";
import { FC } from "react";
import Slider from "react-slick";
import Loader from "../Loader/Loader";

interface CategoriesSliderProps {}

interface categorey {
  image: string;
  name:string;
}
const CategoriesSlider: FC<CategoriesSliderProps> = () => {
   const {isPending,data  } =useCategories();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <Slider {...settings} className="mb-6">
          {data?.data.map((cat: categorey, index: number) => (
            <div key={index} className="item">
              <img src={cat.image} className="w-full h-52" alt={cat.name} />
              <h5>{cat.name}</h5>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default CategoriesSlider;
