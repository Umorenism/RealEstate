// import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import pic from "../../asset/house3.png";

export const Properties = () => {
  // const [type, setType] = useState(0);
  // const [continent, setContinent] = useState(0);
  // const [priceRange, setPriceRange] = useState(0);

  // const handleChange = () => {};
  return (
    <div className="min-h-[500px] w-full mt-[2.5rem]">
      <div className="max-w-[1100px] h-full m-auto">
        <div className="md:w-[90%] p-4 rounded-xl shadow-lg flex justify-around items-center py-2 flex-col m-2 md:flex-row">
          <select
            // onChange={(e: any) => setType(e.target.value)}
            className="h-[40px] min-w-[160px] max-w-[200px]  border-none bg-blue-500 rounded-full p-2 text-white m-2"
          >
            <option disabled>Select types</option>
            <option value="beach">Town</option>
            <option value="mountain">City</option>
            <option value="villiage">Village</option>
          </select>
          <select
            // onChange={(e: any) => setPriceRange(e.target.value)}
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
            // onChange={(e: any) => setContinent(e.target.value)}
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
          <div className="shadow-xl  w-full min-h-[400px] p-4 py-10">
            <img
              alt="alt"
              src={pic}
              className=" w-full rounded-t-lg max-h-[500px] object-cover"
            />
            <div className="flex justify-between flex-col items-center">
              <h1 className="text-2xl font-bold py-2">Village Property</h1>
              <p className="text-sm text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores commodi blanditiis cumque, nihil facere soluta ex
                corrupti quidem dolorum fugit tenetur veritatis, magnam
              </p>
            </div>
            <button className="bg-blue-600 rounded-md text-white py-2 px-4 mt-3">
              View
            </button>
          </div>
          <div className="shadow-xl  w-full min-h-[400px] p-4 py-10">
            <img
              alt="alt"
              src={pic}
              className=" w-full rounded-t-lg max-h-[500px] object-cover"
            />
            <div className="flex justify-between flex-col items-center">
              <h1 className="text-2xl font-bold py-2">City Property</h1>
              <p className="text-sm text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores commodi blanditiis cumque, nihil facere soluta ex
                corrupti quidem dolorum fugit tenetur veritatis, magnam
              </p>
            </div>
            <button className="bg-blue-600 rounded-md text-white py-2 px-4 mt-3">
              View
            </button>
          </div>
          <div className="shadow-xl  w-full min-h-[400px] p-4 py-10">
            <img
              alt="alt"
              src={pic}
              className=" w-full rounded-t-lg max-h-[500px] object-cover"
            />
            <div className="flex justify-between flex-col items-center">
              <h1 className="text-2xl font-bold py-2">Town Property</h1>
              <p className="text-sm text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores commodi blanditiis cumque, nihil facere soluta ex
                corrupti quidem dolorum fugit tenetur veritatis, magnam
              </p>
            </div>
            <button className="bg-blue-600 rounded-md text-white py-2 px-4 mt-3">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
