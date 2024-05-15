import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="bg-black rounded-2xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-3">
      <h1 className="lg:col-span-2 text-white uppercase text-3xl lg:text-5xl font-black  mb-8 lg:mb-0 lg:w-[80%]">
        Stay upto date about our latest offers
      </h1>
      <div className="text-center space-y-4">
        <div className="relative">
          <MdOutlineEmail className="absolute text-2xl left-6 -translate-x-1/2 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            className="bg-white rounded-full pl-12"
            type="email"
            placeholder="Enter your email address.."
          />
        </div>
        <Button className="bg-white text-black w-full rounded-full hover:bg-gray-200 duration-200">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
