import React, { useContext } from "react";
import { UserContext } from "../../store/fetchNew-context";

const Pagination = () => {
  const { page, updatePage, totalPages } = useContext(UserContext);

  return (
    <div className="container flex gap-2 justify-center flex-wrap my-4">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`
              rounded-sm w-[40px] h-[40px] flex items-center justify-center my-[2rem]
              ${
                page === pageNumber
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }
            `}
            onClick={() => updatePage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
