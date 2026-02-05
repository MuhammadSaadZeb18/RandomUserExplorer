import React, { useContext, useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
const nationalities = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];

const Filters = ({ gender, nat, setGender, setNat }) => {
  const [openGenderDropdown, setOpenGenderDropdown] = useState(false);
  const [openCountryDropdown, setOpenCountryDropdown] = useState(false);

  return (
    <div className="flex flex-col items-start justify-between xs1:items-center xs1:flex-row mt-12! flex-wrap">
      <h4 className="flex items-center gap-3">
        <HiMiniUserGroup size={40} />
        Users
      </h4>

      <div className="flex gap-3">
        {/* GENDER */}
        <div className="relative">
          <button
            onClick={() => setOpenGenderDropdown((prev) => !prev)}
            className="border rounded-md px-6 py-3"
          >
            <p>{gender || "Gender"} ▼</p>
          </button>

          {openGenderDropdown && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border rounded-md z-20">
              <p
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setGender("male");
                  setOpenGenderDropdown(false);
                }}
              >
                Male
              </p>
              <p
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setGender("female");
                  setOpenGenderDropdown(false);
                }}
              >
                Female
              </p>
            </div>
          )}
        </div>

        {/* NATIONALITY */}
        <div className="relative">
          <button
            onClick={() => setOpenCountryDropdown((prev) => !prev)}
            className="border rounded-md px-6 py-3"
          >
            <p>{nat || "Nationality"} ▼</p>
          </button>

          {openCountryDropdown && (
            <div className="absolute left-0 mt-2 w-full h-[200px] overflow-y-auto bg-white shadow-lg border rounded-md z-20">
              {nationalities.map((code) => (
                <p
                  key={code}
                  className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setNat(code);
                    setOpenCountryDropdown(false);
                  }}
                >
                  {code}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
