import { useSignIn } from '@/services/mutaions';
import { zodResolver } from '@hookform/resolvers/zod';
import  { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { mutate, isPending } = useSignIn();
      const formSchema = z
        .object({
          email: z.string().min(1, { message: "email is required" }),
          password: z
            .string()
            .min(1, { message: "Password is required" })
        })

      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
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
      <h1 className="text-2xl py-4">Login Now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <Button
            type="submit"
            className="bg-main-color border-main-color block ms-auto hover:bg-white border hover:text-main-color"
            disabled={!form.formState.isValid || !form.formState.dirtyFields}
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin me-2"></i>
                Login
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <h3 className="text-center text-[#EF5962] text-3xl font-thin">
        {errorMessage}
      </h3>
    </div>
  );
}


export default Login;
