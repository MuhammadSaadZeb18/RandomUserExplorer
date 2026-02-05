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
      className="card border rounded-lg p-4 flex flex-col gap-2 
                 bg-white shadow-md animate-pulse"
    >
      {/* IMAGE SHIMMER */}
      <div className="overflow-hidden border rounded-full w-32 h-32 mx-auto mb-4">
        <div className="w-full h-full bg-gray-300"></div>
      </div>

      {/* TEXT FIELDS SHIMMER */}
      {fields.map((field, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-sm"
        >
          <h6 className="font-semibold">{field.label}</h6>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUserCard;
