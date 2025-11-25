import React, { useContext } from "react";
import { UserContext } from "../../store/FetchUser-Context";

const Pagination = () => {
  const { fetchByPagination, activePage } = useContext(UserContext);

  const totalPages = 10;

  return (
    <div className="container flex gap-2 justify-center flex-wrap my-4">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`
             rounded-Sm w-5 h-[40px] btn-primary flex items-center justify-center  ${
               activePage === page
                 ? " bg-primary text-white "
                 : "bg-gray-200 text-black"
             }
 `}
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
