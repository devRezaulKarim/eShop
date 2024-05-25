"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

type Inputs = {
  userName: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors.password);
  };

  return (
    <fieldset className="border-2 border-black p-10 rounded-2xl">
      <legend className="text-center text-3xl font-semibold px-2">Login</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username:</label>
        <Input
          className={`${errors.userName && "border-red-400"}`}
          id="userName"
          type="text"
          placeholder="Email or username"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <p className="text-red-400">This field is required</p>
        )}

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

        <Button className="mt-6 w-full border border-black hover:bg-white hover:text-black duration-200">
          Login
        </Button>
      </form>
      <p className="text-center my-2">
        New here?{" "}
        <Link className="text-blue-500" href={"/signup"}>
          Sign up
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

export default LoginForm;
