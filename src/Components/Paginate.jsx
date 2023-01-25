import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Paginate = ({ pageCount }) => {
  const [params, setParams] = useSearchParams();
  function handlePageClick(e) {
    if (e.selected === 0) {
      params.delete("page");
    } else {
      params.set("page", e.selected + 1);
    }
    setParams(params);
  }
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center my-3"
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      pageLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakLinkClassName="page-link"
      activeClassName="active"
      forcePage={params.has("page") ? params.get("page") - 1 : 0}
    />
  );
};
export default Paginate;
