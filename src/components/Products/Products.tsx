/** @format */

import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import Loader from "../Loader/Loader";
import { useInView } from "react-intersection-observer";
import { useProducts } from "@/hooks/use-products";
interface ProductsProps {}

interface product {
  id: number;
  title: string;
  imageCover: string;
  category: any;
  name: string;
  price: number;
  ratingsAverage: number;
}
const Products: FC<ProductsProps> = () => {
  const {
    data,
    isError,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useProducts();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError && !isPending) {
    return <h3>error getting Products data:{error.message}</h3>;
  }
  if (data?.pages[0]?.data.length === 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3 ">
        <h1> No Products</h1>
      </div>
    );
  }
  if (data?.pages[0]?.data.length > 0) {
    return (
      <div className="my-16 container m-auto">
        <h2>OUR Products</h2>
        {data.pages.map((page: any, pageIndex: number) => (
          <div key={pageIndex}>
            <div className="grid grid-flow-row gap-4 grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 ">
              {page.data.map((product: product) => (
                <div
                  key={product.id}
                  ref={ref}
                  className="aspect-square transition-all animate-fadeIn"
                >
                  <Link to={"/details/" + product.id}>
                    <div className="group flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 relative ">
                      <img
                        className="object-contain w-full h-full transition duration-300 ease-in-out group-hover:scale-105"
                        src={product.imageCover}
                        alt={product.title}
                      />
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 ">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black">
                          <h3 className="me-4 pl-2">
                            {product.title.split(" ").slice(0, 2).join(" ")}{" "}
                            {product.category.name
                              .split(" ")
                              .slice(0, 2)
                              .join(" ")}
                          </h3>
                          <p className="rounded-full bg-blue-600 p-2 text-white">
                            <PriceFormat price={product.price} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {isFetchingNextPage && (
          <i className="fa-solid fa-circle-notch fa-spin me-2"></i>
        )}
      </div>
    );
  }
};

export default Products;
