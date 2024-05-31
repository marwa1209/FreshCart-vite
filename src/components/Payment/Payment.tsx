/** @format */

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import { cashorder } from "@/services/mutations/payment";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";
interface PaymentProps {}

const Payment: FC<PaymentProps> = () => {
  //get cart id
  let { cartId } = useCart();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      cashorder(id, data),
    onSuccess: (data) => {
      console.log(data)
      window.location.href = data?.session.url;
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const formSchema = z.object({
    details: z.string().min(1, { message: "details is required" }),
    phone: z.string().min(1, { message: "phone is required" }),
    city: z.string().min(1, { message: "city is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    mode: "all",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(
      { id: cartId, data: { shippingAddress: { values } } },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          if ((error as any)?.response?.data?.message) {
            console.log((error as any)?.response?.data?.message);
            setErrorMessage((error as any).response.data.message);
            console.log(errorMessage);
          }
        },
      }
    );
  };
  return (
    <div className="my-5">
      <h1 className="text-2xl py-4">Shipping Address</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adress details:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.details &&
                    form.formState.dirtyFields.details &&
                    form.formState.errors.details.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>phone:</FormLabel>
                <FormControl>
                  <Input {...field} type="phone" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phone &&
                    form.formState.dirtyFields.phone &&
                    form.formState.errors.phone.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>city:</FormLabel>
                <FormControl>
                  <Input {...field} type="city" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.city &&
                    form.formState.dirtyFields.city &&
                    form.formState.errors.city.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-main-color border-main-color block me-auto hover:bg-white border hover:text-main-color"
            disabled={!form.formState.isValid || !form.formState.dirtyFields}
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin me-2"></i>
                pay
              </>
            ) : (
              "pay"
            )}
          </Button>
        </form>
      </Form>
      <h3 className="text-center text-[#EF5962] text-3xl font-thin">
        {errorMessage}
      </h3>
    </div>
  );
};

export default Payment;
