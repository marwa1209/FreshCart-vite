/** @format */

import { FC, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import Loader from "../Loader/Loader";
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
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isPending) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchNextPage, isPending, hasNextPage]
  );

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
  if (data?.pages[0]?.data?.length > 0) {
    return (
      <div className="my-5 sm:my-16 m-auto">
        <h2>OUR Products</h2>
        {data.pages.map((page: any, pageIndex: number) => (
          <div key={pageIndex}>
            <div className="grid grid-flow-row gap-4 grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 ">
              {page.data.map((product: product, index: number) => {
                //if lastElement
                if (
                  data.pages.length - 1 === pageIndex &&
                  page.data.length - 1 === index
                ) {
                  return (
                    <div
                      key={product.id}
                      className="aspect-square transition-all animate-fadeIn"
                    >
                      <Link to={"/details/" + product.id}>
                        <div
                          className="group flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 relative "
                          ref={lastElementRef}
                        >
                          <img
                            className="object-contain w-full h-full transition duration-300 ease-in-out group-hover:scale-105"
                            src={product.imageCover}
                            alt={product.title}
                          />
                          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 ">
                            <div className="flex-col m-auto items-start rounded-md flex sm:items-center  border bg-white/70 p-1 text-xs font-semibold text-black">
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
                  );
                }
                return (
                  <div
                    key={product.id}
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
                          <div className="flex-col w-[75%] py-3 mx-auto items-start rounded-md flex sm:items-center sm:flex-row sm:mx-0  border bg-white/70 p-1 text-xs font-semibold text-black">
                            <h3 className="me-4 pl-2 mb-2">
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
                );
              })}
            </div>
          </div>
        ))}

        {isFetchingNextPage && (
          <div className="mt-3 flex justify-center">
            <i className="fa-solid fa-circle-notch fa-spin me-2 mt-5 h-4 animate-spin"></i>
          </div>
        )}
      </div>
    );
  }
};

export default Products;
