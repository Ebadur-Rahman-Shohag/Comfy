import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import ErrorElement from "../components/ErrorElement";
import Loading from "../components/Loading";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <nav className="text-4xl text-primary">
        <Header />
        <NavBar />
        {isPageLoading ? (
          <Loading />
        ) : (
          <section className="align-element py-20">
            <Outlet />
          </section>
        )}
      </nav>
    </>
  );
}

export default HomeLayout;
