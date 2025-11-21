import React from "react";

const UserDetail = ({ user }) => {
  const {
    gender,
    name,
    location,
    email,
    login,
    dob,
    registered,
    phone,
    cell,
    id,
    picture,
    nat,
  } = user;

  const fullName = `${name.title} ${name.first} ${name.last}`;
  const fullAddress = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}, ${location.postcode}`;

  const fields = [
    { label: "Full Name", value: fullName },
    { label: "Gender", value: gender },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Cell", value: cell },
    { label: "Username", value: login.username },
    { label: "Date of Birth", value: new Date(dob.date).toLocaleDateString() },
    { label: "Age", value: dob.age },
    {
      label: "Registered Since",
      value: new Date(registered.date).toLocaleDateString(),
    },
    { label: "ID", value: `${id.name} - ${id.value}` },
    { label: "Nationality", value: nat },
    { label: "Full Address", value: fullAddress },
    {
      label: "Coordinates",
      value: `Lat: ${location.coordinates.latitude}, Lon: ${location.coordinates.longitude}`,
    },
    { label: "Timezone", value: location.timezone.description },
  ];

  return (
    <div className=" rounded-Md container   mt-[10rem]!">
      <div className="  border flex flex-col p-[2rem]! items-center  md:flex-row gap-6">
        <div className="w-[100%] sm:w-[80%] md:w-[40%] flex items-center justify-center">
          <img
            src={picture.large}
            alt={fullName}
            className="rounded-md h-auto w-full  border bg-secondary"
          />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col gap-3 ">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0"
            >
              <h6 className="text-gray-700 font-semibold">{field.label}</h6>
              <h6 className="text-paragraph font-normal">{field.value}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
