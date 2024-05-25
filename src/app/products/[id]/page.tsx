import ProductDetails from "@/components/custom/ProductDetails";
import type { Metadata } from "next";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: `eShop || Product ${id}`,
  };
}

const getSingleData = async (id: any) => {
  const response = await fetch(
    `https://rezauls-json-server.vercel.app/clothings/${id}`
  );
  return await response.json();
};

const productDetails = async ({ params }: any) => {
  const product = await getSingleData(params.id);
  console.log(product);
  return (
    <section className="container">
      <ProductDetails product={product} />
    </section>
  );
};

export default productDetails;
