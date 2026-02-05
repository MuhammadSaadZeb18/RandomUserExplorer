import React from "react";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  const { name, email, phone, adress, gender, dob, country, img } = user;
  const truncateEmail = (email) => {
    if (!email) return "";
    const [userPart] = email.split("@");
    return `${userPart}@g..`;
  };
  const fields = [
    { label: "Name", value: name },
    { label: "Email", value: truncateEmail(email) },
    { label: "Phone", value: phone },
    // { label: "Address", value: adress },
    { label: "Gender", value: gender },
    { label: "Date of birth", value: dob },
    { label: "Country", value: country },
  ];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.05 }}
      className="card border rounded-lg cursor-pointer p-4 flex flex-col gap-2 justify-center 
                 bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className="overflow-hidden border rounded-full w-32 h-32 mx-auto mb-4">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {fields.map((field) => (
        <div
          key={field.label}
          className="flex items-center justify-between transition-colors duration-300 hover:text-primary text-sm"
        >
          <h6 className="font-semibold">{field.label}</h6>
          <h6 className="text-gray-600 font-normal truncate">{field.value}</h6>
        </div>
      ))}
    </motion.div>
  );
};

export default UserCard;
