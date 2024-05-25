import Products from "@/components/custom/Products";

type metadata = {
  title: string;
  description?: string;
};
export const metadata: metadata = {
  title: "eShop || Products",
};

const products = () => {
  return (
    <section className="container">
      <Products />
    </section>
  );
};

export default products;
