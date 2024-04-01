import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const url = "/products";
export async function loader({ request }) {
  const response = await customFetch(url);
  // console.log(response)
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
