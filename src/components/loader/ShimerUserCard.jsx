import React from "react";

const ShimmerUserCard = () => {
  return (
    <div
      className="card border rounded-Md p-6 flex flex-col gap-3 
                 bg-white shadow-md animate-pulse"
    >
      {/* IMAGE SHIMMER */}
      <div className="overflow-hidden border rounded-full w-[20rem] h-80 mx-auto mb-5">
        <div className="w-full h-full bg-gray-300"></div>
      </div>

      {/* TEXT FIELDS SHIMMER */}
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUserCard;
