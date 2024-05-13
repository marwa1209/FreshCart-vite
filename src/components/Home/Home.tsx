/** @format */
import { FC } from "react";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
        <MainSlider></MainSlider>
        <h2 className="my-2">Shop Popular Categories</h2>
        <CategoriesSlider></CategoriesSlider>
       <FeaturedProducts></FeaturedProducts>
    </>
  );
};

export default Home;
