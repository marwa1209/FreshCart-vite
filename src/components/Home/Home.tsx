/** @format */
import { FC } from "react";
import MainSlider from "../MainSlider/MainSlider";
import Products from "../Products/Products";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
        <MainSlider></MainSlider>
        <h2 className="my-2">Shop Popular Categories</h2>
        <CategoriesSlider></CategoriesSlider>
        <Products limit={true}></Products>
    </>
  );
};

export default Home;
