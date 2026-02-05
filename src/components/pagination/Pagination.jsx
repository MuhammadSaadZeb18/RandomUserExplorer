import React from "react";

const Pagination = ({ page, setPage, totalPages = 10 }) => {
  return (
    <div className="container flex gap-2 justify-center flex-wrap my-4">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`
              rounded-sm w-[40px] h-[40px] font-bold cursor-pointer hover:bg-primary hover:text-white flex items-center justify-center 
              ${
                page === pageNumber
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }
            `}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
