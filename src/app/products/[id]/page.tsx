import type { Metadata, ResolvingMetadata } from "next";
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

const productDetails = () => {
  return <section className="container">productDetails</section>;
};

export default productDetails;
