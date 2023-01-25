import { Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const ShowMoreBtn = ({ text }) => {
  return (
    <Button aria-label="show more" className="btn2 text-capitalize ">
      <FaEye size="17px" />
      <span>{text}</span>
    </Button>
  );
};
export default ShowMoreBtn;
