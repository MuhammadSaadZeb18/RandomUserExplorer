import React from "react";

const fields = [
  { label: "Name" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Address" },
  { label: "Gender" },
  { label: "Date of birth" },
  { label: "Country" },
];

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
      {fields.map((i, index) => (
        <div key={index} className="flex items-center justify-between">
          <h6>{i.label}</h6>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUserCard;
