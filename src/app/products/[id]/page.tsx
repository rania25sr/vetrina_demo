import { products } from "@/data/fakeData";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductDetailClient product={product} />;
}
