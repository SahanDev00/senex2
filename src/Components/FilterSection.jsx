import React from 'react';

const FilterSection = ({ subCategory, onClose }) => {
  return (
    <div className="lg:w-[170px] xl:w-[180px] border-r border-red-600 mt-5 bg-white relative py-2">
      <div className="w-full h-[50px] border border-white flex items-center justify-between px-2">
        <h2 className="text-lg font-semibold">{subCategory}</h2>
        <button onClick={onClose} className="text-black text-xl">&times;</button>
      </div>
      <div className="my-4 ml-3">
        <ul>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 1
            </label>
          </li>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 2
            </label>
          </li>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 3
            </label>
          </li>
          {/* Add more filters as needed */}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
