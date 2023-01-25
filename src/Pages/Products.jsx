import { Container, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Filters from "../Components/Filters/Filters";
import Item from "../Components/Item/Item";
import useApi from "../Hooks/useApi";
import Loading from "../Components/Loading";
import Paginate from "../Components/Paginate";
import useDataToChangeTheparamsAndTitle from "../Hooks/useDataToChangeTheparamsAndTitle";
import { useEffect } from "react";

const Products = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const itemPerPage = 40;
  const { data, loading, error, refresh } = useApi(
    `https://asos2.p.rapidapi.com/products/v2/list${
      location.search
    }&limit=${itemPerPage}&offset=${
      (queries.get("page") - 1) * itemPerPage || 0
    }`
  );
  useEffect(() => {
    if (!queries.has("categoryId")) Navigate("/");
  });
  console.log(data);
  const { category } = useParams();
  let heading_style = {
    color: "black",
    fontWeight: "700",
  };

  useDataToChangeTheparamsAndTitle(
    data?.categoryName,
    `/${data?.categoryName.trim().split(" ").join("-") || "category-name"}/cat${
      location.search
    }`
  );
  if (error)
    return (
      <>
        <h1>Faild to load data</h1>
        <p>{error}</p>
        <button
          className="btn1 mx-auto mb-5"
          aria-label="try again"
          onClick={() => refresh()}
        >
          try again
        </button>
      </>
    );
  else if (data?.errorCode) throw new Error(data?.errorMessage);

  return (
    <section className="position-relative">
      <h1 style={heading_style} className="text-center text-capitalize py-5">
        {category.split("-").join(" ")}
      </h1>
      <Filters facets={data?.facets} />
      <Container>
        {data?.itemCount === 0 ? (
          <h2
            style={heading_style}
            className="text-center text-capitalize py-5"
          >
            no results
          </h2>
        ) : (
          <>
            <Row className=" row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {data?.products.map((product) => (
                <Item key={product.id} item={product} />
              ))}
            </Row>
            <Paginate pageCount={Math.ceil(data?.itemCount / itemPerPage)} />
          </>
        )}
      </Container>
      {loading && <Loading />}
    </section>
  );
};
export default Products;
