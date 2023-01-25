import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const Navigate = useNavigate();
  useEffect(() => {
    document.title = "Fashion";
  });
  const reset = () => {
    Navigate("/");
    resetErrorBoundary();
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-5 flex-column">
      {" "}
      <h1>Sorry! The page you are looking for was not found.</h1>
      <p>{error.message}</p>
      <button
        className="btn1 mx-auto mb-5"
        aria-label="back to home page"
        onClick={reset}
      >
        back to home page
      </button>
    </div>
  );
};
export default ErrorFallback;
