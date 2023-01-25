import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{
        zIndex: "2",
        backgroundImage:
          "linear-gradient(  180deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 97.3%, 0.8))",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className="position-fixed top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center"
    >
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};
export default Loading;
