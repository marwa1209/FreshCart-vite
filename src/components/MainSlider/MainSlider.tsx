/** @format */
import Slider from "react-slick";
import img1 from "../../assets/images/slider-image-1.jpeg";
import img2 from "../../assets/images/slider-image-2.jpeg";
import img3 from "../../assets/images/slider-image-3.jpeg";
export default function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="my-12">
      <div className="flex">
        <div className=" md:w-2/3 min-[420px]:w-full">
          <Slider {...settings}>
            <img src={img3} className="w-full block h-full" alt="slider-img1" />
            <img src={img1} className="w-full block h-full" alt="slider-img1" />
            <img src={img2} className="w-full block h-full" alt="slider-img1" />
          </Slider>
        </div>
        <div className=" md:w-1/3 md:block sm:w-0 sm:hidden">
          <img src={img1} className="w-full" alt="img1" />
          <img src={img2} className="w-full" alt="img2" />
        </div>
      </div>
    </div>
  );
}
