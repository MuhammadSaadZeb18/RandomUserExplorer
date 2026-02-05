import React from "react";
import { motion } from "framer-motion";

const UserDetail = ({ user }) => {
  if (!user) return null;

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 px-4 my-[5rem]!"
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col  gap-4 p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* LEFT: Profile Image */}
        <motion.div
          className="w-full flex justify-center items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={picture.large}
            alt={fullName}
            className="rounded-full w-48 h-48 object-cover border-4 border-primary shadow-lg"
          />
        </motion.div>

        {/* RIGHT: Details */}
        <motion.div
          className="md:w-full flex flex-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {fields.map((field) => (
            <motion.div
              key={field.label}
              className="flex flex-row justify-between gap-1 sm:gap-0 p-2 rounded hover:bg-gray-50 transition-colors"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h6 className="text-gray-700 font-semibold w-40">
                {field.label}
              </h6>
              <h6 className="text-gray-600 font-normal truncate">
                {field.value}
              </h6>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UserDetail;
