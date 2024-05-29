/** @format */

import { FC } from "react";
import Loader from "../Loader/Loader";
import { useGetCart } from "@/hooks/use-cart";
import PriceFormat from "../PriceFormat/PriceFormat";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromCart, updateProductQuan } from "@/hooks/use-cart";
interface CartProps {}
interface product {
  id: number;
  title: string;
  imageCover: string;
  category: any;
  name: string;
  price: number;
  ratingsAverage: number;
  product: any;
  count: number;
}
const Cart: FC<CartProps> = () => {
  //getData
  const queryClient = useQueryClient();
  let { isPending, data, isError ,error} = useGetCart();
  console.log(error);
  //delete
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: any) => deleteFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: () => {
      toast.error("error");
    },
  });
  function deleteCartItem(id: any): void {
    mutateDelete(id);
  }
  //update
  const { mutate } = useMutation({
    mutationFn: ({ id, count }: { id: number; count: number }) =>
      updateProductQuan(id, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: () => {
      toast.error("error");
    },
  });
  function updatequantity(id: any, count: any): void {
    mutate({ id, count });
  }
  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError && !isPending) {
    return <h3>error getting cart data</h3>;
  }
  if (data?.data?.products?.length === 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3 ">
        <h1> No items in the cart</h1>
        <Link
          to={"/products"}
          className="btn-main lg:w-3/12 md:w-4/12 min-[420px]:w-1/2 text-center"
        >
          Add Some Products
        </Link>
      </div>
    );
  }
  if (data?.data.products.length > 0) {
    return (
      <div className="container m-auto my-12 bg-light-color p-3">
        <h1 className="text-xl">Shop Cart</h1>
        <div className="flex gap-1 text-main-color">
          <h3>Total Price </h3>
          <PriceFormat price={data?.data.totalCartPrice} />
        </div>
        {data?.data.products.map((product: product, index: number) => (
          <div key={index} className="relative my-5">
            <div className="flex flex-wrap justify-between align-middle after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[95%]  after:h-[1px] after:bg-gray-500">
              <div className="w-1/2 flex flex-wrap justify-between align-middle">
                <figure className="w-2/12 my-5">
                  <img
                    className="w-full"
                    src={product.product.imageCover}
                    alt={product.product.title}
                  />
                </figure>
                <div className="w-10/12 my-auto">
                  <div className="px-4 flex flex-col">
                    <h2>{product.product.title}</h2>
                    <div className="flex gap-1 text-main-color">
                      <h3>Price: </h3>
                      <PriceFormat price={product.price} />
                    </div>
                    <button
                      onClick={() => deleteCartItem(product.product._id)}
                      className="cursor-pointer my-5 ms-0 text-start"
                    >
                      <i className="fa-solid fa-trash-can text-main-color text-lg  me-2"></i>{" "}
                      Remove
                    </button>
                    <Toaster />
                  </div>
                </div>
              </div>
              <div className="w-1/2 my-auto flex gap-3 items-center justify-end p-2">
                <button
                  onClick={() =>
                    updatequantity(product.product._id, product.count + 1)
                  }
                  className="btn-fun me-0"
                >
                  +
                </button>
                <p className=" text-center text-black">{product.count}</p>
                <button
                  onClick={() =>
                    updatequantity(product.product._id, product.count - 1)
                  }
                  className="btn-fun me-0"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
        <Link
          to={"/checkout/" + data?.data._id}
          className="btn-main lg:w-3/12 md:w-4/12 min-[420px]:w-1/2  text-center"
        >
          checkout
        </Link>
      </div>
    );
  }
};

export default Cart;
