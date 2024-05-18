import LoginForm from "@/components/custom/LoginForm";

type metadata = {
  title: string;
  description?: string;
};
export const metadata: metadata = {
  title: "eShop || Login",
};

const login = () => {
  return <section className="container min-h-[600px] grid place-items-center">
    <LoginForm/>
  </section>;
};

export default login;
