import React, { useContext } from "react";
import { UserContext } from "../../store/FetchUser-Context";

const Pagination = () => {
  const { fetchByPagination } = useContext(UserContext);

  const totalPages = 10; // since you said only 10 pages

  return (
    <div className="container flex gap-2 justify-center flex-wrap my-4">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className="btn-primary rounded-Sm"
            onClick={() => fetchByPagination(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
