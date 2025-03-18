import ReactPaginate from "react-paginate";
import "./pagination.css"; 

function Pagination({ pageCount, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        containerClassName="pagination-container"
        pageLinkClassName="pagination-page"
        activeClassName="pagination-active"
      />
    </div>
  );
}

export default Pagination;
