import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import pic from "../../asset/house3.png";
import pic2 from "../../asset/house4.png";
import pic3 from "../../asset/house2.png";

export const Properties = () => {
  const [type, setType] = useState(0);
  const [continent, setContinent] = useState(0);
  const [priceRange, setPriceRange] = useState(0);

  const handleChange = () => {};
  return (
    <div className="min-h-[500px] w-full mt-[2.5rem]">
      <div className="max-w-[1100px] h-full m-auto">
        <div className="md:w-[90%] p-4 rounded-xl shadow-lg flex justify-around items-center py-2 flex-col m-2 md:flex-row">
          <select
            onChange={(e: any) => setType(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px]  border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select types</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="villiage">Village</option>
          </select>
          <select
            onChange={(e: any) => setPriceRange(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px]  border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select
            onChange={(e: any) => setContinent(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px]  border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select Continents</option>
            <option value="0">Ik</option>
            <option value="1">Uyo</option>
            <option value="2">Essien Udim</option>
            <option value="3">Annang</option>
            <option value="4">Ini</option>
          </select>
          <button>
            {" "}
            <AiOutlineSearch className="p-1 w-[40px] h-[40px] rounded-lg " />
          </button>
        </div>
        <div className="text-center mt-10">
          <h5>Selected proprties</h5>
          <h2 className="text-2xl font-bold">Properties you may like</h2>
        </div>
        <div className="mt-6 gap-4 grid md:grid-cols-3 grid-col w-full justify-center">
          <div className="bg-gray-700 w-[300px] min-h-[400px]">
            <img
              alt="alt"
              src={pic}
              className="max-h-[300px] w-full object-cover"
            />
          </div>
          <div className="bg-gray-700 w-[300px] min-h-[400px]">
            <img
              alt="alt"
              src={pic2}
              className="max-h-[300px] w-full object-cover"
            />
          </div>
          <div className="bg-gray-700 w-[300px] min-h-[400px]">
            <img
              alt="alt"
              src={pic3}
              className="max-h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
