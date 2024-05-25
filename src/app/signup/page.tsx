import SignupForm from "@/components/custom/SignupForm";

type metadata = {
  title: string;
  description?: string;
};
export const metadata: metadata = {
  title: "eShop || Sign up",
};

const signup = () => {
  return (
    <section className="container min-h-[800px] grid place-items-center">
      <SignupForm />
    </section>
  );
};

export default signup;
