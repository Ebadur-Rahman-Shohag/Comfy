import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductsGrid";
function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text={"featured products"} />
      <ProductGrid />
    </div>
  );
}

export default FeaturedProducts;
