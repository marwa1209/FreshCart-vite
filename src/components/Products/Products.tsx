/** @format */

import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import Loader from "../Loader/Loader";
import { useProductsInfinite } from "@/services/queries";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "@/services/cart";
import { useInView } from "react-intersection-observer";
interface ProductsProps {
}

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
  const navigate = useNavigate();
  const {
    data,
    isError,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useProductsInfinite();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage ,fetchNextPage]);
  //post (add To cart)
  const { mutate } = useMutation({
    mutationFn: (id: number) => addToCart(id),
    onSuccess: () => {
      toast.success("Product Added successfully", {
        duration: 2000,
        position: "bottom-right",
        icon: "👏",
      });
    },
    onError: () => {
      toast.error("error");
    },
  });
  function addCart(id: number): void {
    mutate(id);
    if (localStorage.getItem("userToken") == null) {
      navigate("/login");
    }
  }

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
            <div className="flex flex-wrap ">
              {page.data.map((product: product) => (
                <div
                  key={product.id}
                  ref={ref}
                  className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
                >
                  <Link to={"/details/" + product.id}>
                    <div className="px-4 cursor-pointer">
                      <img
                        className="mb-3 h-64 xl:w-full min-[420px]:w-[80%] block m-auto"
                        src={product.imageCover}
                        alt={product.title}
                      />
                      <h3 className="text-sm text-main-color">
                        {product.category.name}
                      </h3>
                      <h4 className="text-xl mb-4">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </h4>
                      <div className="flex justify-between align-middle">
                        <PriceFormat price={product.price} />
                        <div>
                          <i className="fa-solid fa-star text-rating-color"></i>
                          <span className="text-gray-600">
                            {product.ratingsAverage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button
                    className="btn-main py-1 rounded-md mx-auto"
                    onClick={() => addCart(product.id)}
                  >
                    Add To Cart
                  </button>
                  <Toaster />
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
