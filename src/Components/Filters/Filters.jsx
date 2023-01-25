import { Container } from "react-bootstrap";
import { memo } from "react";
import FilterDropDown from "../Filter Dropdown/FilterDropDown";

const Filters = ({ facets = [] }) => {
  console.log(facets);
  return (
    <section
      style={{
        backgroundColor: "rgb(227 227 227)",
        marginBottom: "25px",
        paddingTop: "10px",
      }}
      className={` border-top border-bottom`}
    >
      <Container>
        <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 ">
          {facets.map((li) =>
            li.id !== "currentprice" && li.id !== "floor" ? (
              <FilterDropDown li={li} key={li.id} />
            ) : (
              ""
            )
          )}
        </ul>
      </Container>
    </section>
  );
};
export default memo(Filters);
