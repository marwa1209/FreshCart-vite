/** @format */

import { FC } from "react";
import Loader from "../Loader/Loader";
import { useBrands } from "@/hooks/use-brands";
import Marquee from "../marquee/marquee";
import { cn } from "@/lib/utils";

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

interface BrandsProps {}

const Brands: FC<BrandsProps> = () => {
  const { data, isError, error, isPending } = useBrands();
  const firstRow = data?.data.slice(0, data?.data.length / 2);
  const secondRow = data?.data.slice(data?.data.length / 2);
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
      <div className=" m-auto my-12 bg-light-color p-3 ">
        <h1> No Brands</h1>
      </div>
    );
  }
  if (data?.data.length > 0) {
    return (
      <>
        <h2>OUR brands</h2>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  py-20 ">
          <Marquee pauseOnHover className="[--duration:50s]">
            {firstRow.map((brand: any) => (
              <ReviewCard key={brand._id} img={brand.image} name={brand.name} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:50s]">
            {secondRow.map((brand: any) => (
              <ReviewCard key={brand._id} img={brand.image} name={brand.name} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </>
    );
  }
};

export default Brands;
