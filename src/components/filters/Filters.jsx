import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";

const Filters = ({
  openGenderDropdown,
  openCountryDropdown,
  setOpenGenderDropdown,
  setOpenCountryDropdown,
  genderType,
  countryType,
  setGenderType,
  setCountryType,
  allCountries,
}) => {
  return (
    <div className="flex flex-col items-start justify-between xs1:items-center xs1:flex-row mt-12! flex-wrap">
      <h4 className="flex items-center gap-3">
        <HiMiniUserGroup size={40} className="text-primary!" />
        Users
      </h4>

      {/* TWO FILTERS */}
      <div className="flex gap-5 ">
        {/* GENDER FILTER */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenGenderDropdown((prev) => !prev);
              setOpenCountryDropdown(false);
            }}
            className="border cursor-pointer rounded-md px-6 py-3 text-[1.4rem] font-normal sm:text-[1.6rem] bg-white flex items-center justify-between "
          >
            {genderType === "" ? "Gender" : genderType}
            <span className="ml-3">▼</span>
          </button>

          {openGenderDropdown && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border rounded-md z-20">
              <p
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-[1.6rem]"
                onClick={() => {
                  setGenderType("male");
                  setOpenGenderDropdown(false);
                }}
              >
                Male
              </p>

              <p
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-[1.6rem]"
                onClick={() => {
                  setGenderType("female");
                  setOpenGenderDropdown(false);
                }}
              >
                Female
              </p>
            </div>
          )}
        </div>

        {/* COUNTRY FILTER */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenCountryDropdown((prev) => !prev);
              setOpenGenderDropdown(false);
            }}
            className="border cursor-pointer rounded-md px-6 py-3 text-[1.4rem] font-normal sm:text-[1.6rem] bg-white flex items-center justify-between"
          >
            {countryType === "" ? "Nationility" : countryType}
            <span className="ml-3">▼</span>
          </button>

          {openCountryDropdown && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border rounded-md z-20 max-h-[260px] overflow-y-auto">
              {/* Dynamic Countries from Users API */}
              {allCountries.map((country, index) => (
                <p
                  key={index}
                  className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-[1.6rem]"
                  onClick={() => {
                    setCountryType(country);
                    setOpenCountryDropdown(false);
                  }}
                >
                  {country}
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
