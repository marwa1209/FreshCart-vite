/** @format */

import { FC } from "react";
import { useCategories } from "@/hooks/use-categories";
import Loader from "../Loader/Loader";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  const { data, isError, error, isPending } = useCategories();
  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError && !isPending) {
    return <h3>error getting Categories data:{error.message}</h3>;
  }
  if (data?.data.length === 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3 ">
        <h1> No Categories</h1>
      </div>
    );
  }
  if (data?.data.length > 0) {
    return (
      <div className=" my-16 container m-auto">
        <h2>OUR categories</h2>
        <div className="flex flex-wrap">
          {data?.data.map((categorey: any) => (
            <div
              key={categorey._id}
              className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
            >
              <div className="px-4  cursor-pointer">
                <img
                  className="mb-3 h-64  xl:w-full  min-[420px]:w-[80%] block m-auto"
                  src={categorey.image}
                  alt={categorey.name}
                />
                <h3 className="text-sm text-main-color">{categorey.slug}</h3>
                <h4 className="text-xl mb-4">
                  {categorey.name.split(" ").slice(0, 2).join(" ")}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Categories;
