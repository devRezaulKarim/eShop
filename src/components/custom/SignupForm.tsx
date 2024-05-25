"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

type Inputs = {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};
const SignupForm = () => {
  const [isPassMatched, setIsPassMatched] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <fieldset className="border-2 border-black p-10 rounded-2xl">
      <legend className="text-center text-3xl font-semibold px-2">
        Sign up
      </legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full name:</label>
        <Input
          className={`${errors.fullName && "border-red-400"}`}
          id="fullName"
          type="text"
          placeholder="Your full name"
          {...register("fullName")}
        />

        <label className="mt-4 block" htmlFor="userName">
          Username:
        </label>
        <Input
          className={`${errors.userName && "border-red-400"}`}
          id="userName"
          type="text"
          placeholder="Username"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <p className="text-red-400">This field is required</p>
        )}

        <label className="mt-4 block" htmlFor="userName">
          Email:
        </label>
        <Input
          className={`${errors.email && "border-red-400"}`}
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-400">This field is required</p>}

        <label className="mt-4 block" htmlFor="password">
          Password:
        </label>
        <Input
          className={`${errors.password && "border-red-400"}`}
          id="password"
          type="password"
          placeholder="Password"
          minLength={8}
          {...register("password", { required: true })}
        />

        {errors.password && (
          <p className="text-red-400">This field is required</p>
        )}
        <label className="mt-4 block" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <Input
          className={`${
            (errors.confirmPassword || isPassMatched) && "border-red-400"
          }`}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          minLength={8}
          {...register("confirmPassword", { required: true })}
        />
        {isPassMatched && (
          <p className="text-red-400">Password doesn&#39;t match</p>
        )}
        {errors.confirmPassword && (
          <p className="text-red-400">This field is required</p>
        )}

        <Button className="mt-6 w-full border border-black hover:bg-white hover:text-black duration-200">
          Sign up
        </Button>
      </form>
      <p className="text-center my-2">
        Already have an account?
        <Link className="text-blue-500 ml-1" href={"/login"}>
          Login
        </Link>
      </p>
      <p className="text-center mb-2 relative before:content-[''] before:bg-gray-300 before:w-full before:h-[2px] before:absolute before:left-0 before:top-1/2 before:-z-10">
        <span className="bg-white px-1">or</span>
      </p>
      <Button className="w-full border border-black hover:bg-white hover:text-black duration-200">
        Continue with google
      </Button>
    </fieldset>
  );
};

export default SignupForm;
