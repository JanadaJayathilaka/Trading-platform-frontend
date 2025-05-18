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
import React from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-15 py-2 w-full ">
      <h1 className="text-xl font-bold text-center pb-3">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border border-gray-700 w-80  p-5"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className=" py-3 bg-white text-black">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
