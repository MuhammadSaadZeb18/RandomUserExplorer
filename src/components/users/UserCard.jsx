import React from "react";

const UserCard = ({ user }) => {
  const { name, email, phone, adress, gender, dob, country, img } = user;


  const fields = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Address", value: adress },
    { label: "Gender", value: gender },
    { label: "Date of birth", value: dob },
    { label: "Country", value: country },
  ];

  return (
    <div
      className="card border rounded-Md cursor-pointer p-6 flex flex-col gap-3 justify-center 
                    bg-white hover:bg-gray-50 transform hover:-translate-y-1 hover:scale-105 
                    shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className="overflow-hidden rounded-full w-[20rem] h-[20rem] mx-auto mb-5">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {fields.map((field) => (
        <div
          key={field.label}
          className="flex items-center justify-between transition-colors duration-300 hover:text-primary"
        >
          <h6>{field.label}</h6>
          <h6 className="text-paragraph font-normal">{field.value}</h6>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
