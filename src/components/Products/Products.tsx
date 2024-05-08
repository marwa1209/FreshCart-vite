/** @format */

import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import Loader from "../Loader/Loader";
import { useProducts } from "@/services/queries";
import { useaddToCart } from "@/services/mutaions";
import toast, { Toaster } from "react-hot-toast";
interface ProductsProps {
  limit?: boolean;
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
const Products: FC<ProductsProps> = ({ limit }) => {
  const navigate = useNavigate();
  const { isPending: productsPending, data: productsData } = useProducts();
  const { mutate } = useaddToCart();
  function addCart(id: number): void {
    mutate(id, {
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

    if (localStorage.getItem("userToken") == null) {
      navigate("/login");
    }
  }

  return (
    <>
      {productsPending ? (
        <Loader />
      ) : (
        <div className=" my-16 container m-auto">
          <h2>OUR Products</h2>
          <div className="flex flex-wrap">
            {productsData?.data
              .slice(0, limit ? 18 : productsData.data.length)
              .map((product: product, index: number) => (
                <div
                  key={index}
                  className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
                >
                  <Link to={"/details/" + product.id}>
                    <div className="px-4  cursor-pointer">
                      <img
                        className="mb-3 h-64  xl:w-full  min-[420px]:w-[80%] block m-auto"
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
      )}
    </>
  );
};

export default Products;
