import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowMoreBtn from "../Show More Btn/Show More Btn";
import ItemsRow from "../Items Row";

const FeaturedItems = () => {
  return (
    <section className="sec-margin">
      <Container>
        <div>
          <div className="heading-sec">
            <h2>featured items</h2>
          </div>
          <ItemsRow
            url="https://asos2.p.rapidapi.com/products/v2/list?limit=10&categoryId=4209&range=new_season"
            display={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            niche="featured"
          />
          <div>
            <Link
              to="/new-in/view-all/cat?categoryId=27110"
              className=" m-auto mt-4 d-block w-fit"
            >
              <ShowMoreBtn text="show more" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default FeaturedItems;
