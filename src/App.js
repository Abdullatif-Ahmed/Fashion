import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import ErrorFallback from "./Components/Error Fallback";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import ItemsRow from "./Components/Items Row";
import { Spinner } from "react-bootstrap";
const Home = lazy(() => import("./Pages/Home"));
const Products = lazy(() => import("./Pages/Products"));
const Product = lazy(() => import("./Pages/Product"));
const Search = lazy(() => import("./Pages/Search"));

function App() {
  return (
    <HashRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh" }}
            >
              <Spinner
                animation="border"
                style={{
                  color: "var(--main-color)",
                }}
              />
            </div>
          }
        >
          <ToastContainer />
          <Header />

          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                index
                element={
                  <ItemsRow
                    url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&offset=0&categoryId=28045"
                    display={{ sm: 2, md: 3, lg: 4, xl: 5 }}
                    niche="top_order"
                  />
                }
              />
              <Route
                path="top-order"
                element={
                  <ItemsRow
                    url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&offset=0&categoryId=28045"
                    display={{ sm: 2, md: 3, lg: 4, xl: 5 }}
                    niche="top_order"
                  />
                }
              />
              <Route
                path="top-rating"
                element={
                  <ItemsRow
                    url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&offset=0&categoryId=4747"
                    display={{ sm: 2, md: 3, lg: 4, xl: 5 }}
                    niche="top_rating"
                  />
                }
              />
              <Route
                path="top-discount"
                element={
                  <ItemsRow
                    url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&offset=0&categoryId=28234&reange=sale"
                    display={{ sm: 2, md: 3, lg: 4, xl: 5 }}
                  />
                }
              />
            </Route>
            <Route path="/:category/cat" element={<Products />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id/:name" element={<Product />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Subscribe />

          <Footer />
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
