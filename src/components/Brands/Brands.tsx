/** @format */

import { FC } from "react";
import Loader from "../Loader/Loader";
import { useBrands } from "@/hooks/use-brands";

interface BrandsProps {}

const Brands: FC<BrandsProps> = () => {
  const { data, isError, error, isPending } = useBrands();
  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError && !isPending) {
    return <h3>error getting Brands data {error.message}</h3>;
  }
  if (data?.data.length === 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3 ">
        <h1> No Brands</h1>
      </div>
    );
  }
  if (data?.data.length > 0) {
    return (
      <div className=" my-16 container m-auto">
        <h2>OUR brands</h2>
        <div className="flex flex-wrap">
          {data?.data.map((brand: any) => (
            <div
              key={brand._id}
              className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
            >
              <div className="px-4  cursor-pointer">
                <img
                  className="mb-3 h-64  xl:w-full  min-[420px]:w-[80%] block m-auto"
                  src={brand.image}
                  alt={brand.name}
                />
                <h3 className="text-sm text-main-color">{brand.slug}</h3>
                <h4 className="text-xl mb-4">
                  {brand.name.split(" ").slice(0, 2).join(" ")}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Brands;
