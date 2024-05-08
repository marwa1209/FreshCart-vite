/** @format */

import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/services/mutaions";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  //apis
  const { mutate, isPending } = useRegister();
  const formSchema = z
    .object({
      name: z
        .string()
        .min(1, { message: "Name is required" })
        .min(2, {
          message: "Username must be at least 2 characters.",
        })
        .max(50, {
          message: "Username must be at most 50 characters.",
        }),
      email: z.string().min(1, { message: "email is required" }).email(),
      password: z
        .string()
        .min(1, { message: "Password is required" })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
          message: "Password must contain at least one letter and one number",
        })
        .min(8, { message: "Password must be at least 8 characters long" }),
      rePassword: z.string().min(1, { message: "Password is required" }),
      phone: z
        .string()
        .min(1, { message: "Phone is required" })
        .refine((val) => /^(010|011|012|015)\d{8}$/.test(val), {
          message: "Invalid phone number",
        }),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords must match",
      path: ["rePassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: "all",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values, {
      onError: (error) => {
        if ((error as any)?.response?.data?.message) {
          console.log((error as any)?.response?.data?.message);
          setErrorMessage((error as any).response.data.message);
          console.log(errorMessage);
        }
      },
    });
  };
  return (
    <div className="my-5">
      <h1 className="text-2xl py-4">Register Now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email &&
                    form.formState.dirtyFields.email &&
                    form.formState.errors.email.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password &&
                    form.formState.dirtyFields.password &&
                    form.formState.errors.password.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RePassword:</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.rePassword &&
                    form.formState.dirtyFields.rePassword &&
                    form.formState.errors.rePassword.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phone &&
                    form.formState.dirtyFields.phone &&
                    form.formState.errors.phone.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-main-color border-main-color block ms-auto hover:bg-white border hover:text-main-color"
            disabled={!form.formState.isValid || !form.formState.dirtyFields}
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin me-2"></i>
                Register
              </>
            ) : (
              "Register"
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

export default Register;
