import "../css/pagination.css";

import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";

function MyPagination({ page, setPage }) {
  const totalPages = 533;

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Pagination
        {...bootstrap5PaginationPreset}
        current={page}
        total={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default MyPagination;
