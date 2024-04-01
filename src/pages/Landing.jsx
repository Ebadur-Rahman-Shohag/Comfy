import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

import { customFetch } from "../utils";
const url = "/products?featured=true";

/*A loader in react-router is a function that is used to fetch data for a route before it is rendered. When you click on a link which directs you to a route, the loader function runs and gets the data ready for the route before it renders.*/

//// Loader function to load data asynchronously
export const loader = async () => {
  const response = await customFetch(url);
  // console.log(response);
  const products = response.data.data;
  // console.log({products})
  return { products };
};

function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
