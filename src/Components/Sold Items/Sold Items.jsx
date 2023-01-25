import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowMoreBtn from "../Show More Btn/Show More Btn";
import ItemsRow from "../Items Row";

const SoldItems = () => {
  return (
    <section className="sec-margin">
      <Container>
        <div>
          <div className="heading-sec">
            <h2>Recently Sold Items</h2>
          </div>
          <ItemsRow
            url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&categoryId=28235"
            display={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          />
          <Link
            to="/sale/sale-under-$15/cat?categoryId=28235"
            className=" m-auto mt-4 d-block w-fit"
          >
            <ShowMoreBtn text="show more" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default SoldItems;
