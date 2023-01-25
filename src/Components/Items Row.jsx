import { Row, Spinner } from "react-bootstrap";
import useApi from "../Hooks/useApi";
import Item from "./Item/Item";
const ItemsRow = ({ url, display, niche = "" }) => {
  const { data, loading } = useApi(url);
  console.log(data);
  if (loading) {
    return (
      <Spinner
        animation="border"
        className="m-auto d-block"
        style={{
          color: "var(--main-color)",
        }}
      />
    );
  }
  return (
    <Row
      className={` row-cols-${display.sm} row-cols-md-${display.md} row-cols-lg-${display.lg} row-cols-xl-${display.xl} `}
    >
      {data &&
        data.products.map((el) => <Item key={el.id} item={el} niche={niche} />)}
    </Row>
  );
};
export default ItemsRow;
