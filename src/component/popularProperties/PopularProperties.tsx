// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../src/asset/house3.png";
import img2 from "../../../src/asset/house4.png";
import img3 from "../../../src/asset/house5.png";

export const PopularProperties = () => {
  // const [numberOfProperties, setNumberOfProperties] = useState({});

  // useEffect(() => {
  //   const fetchNumberOfProperties = async () => {
  //     try {
  //       // const data = await request('/property/find/types' 'GET') coming from utli
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchNumberOfProperties();
  // }, []);
  return (
    <div className="min-h-screen max-w-[100%] w-full mt-5">
      <div className="max-w-[1100px] p-4 min-h-[400px] m-auto flex  flex-col">
        <div className="flex items-center flex-col gap-5">
          <h5 className="text-[#777] text-xl">Different Types of Properties</h5>
          <h2 className="text-[#333] font-bold text-3xl">
            Best types of proerty in Uyo
          </h2>
        </div>
        <div className="flex flex-col md:flex-row relative mt-4 gap-5 p-4">
          <Link
            to={`/properties?type=beach$continent=1$priceRange=2`}
            className=" shadow-2xl  p-4 relative w-full md:w-[30%] "
          >
            <img
              src={img1}
              className="relative rounded-2xl w-full h-[400px] shadow-md object-cover"
            />
            {/* <div>{numberOfProperties?.beach}</div> */}
            <div className="absolute text-white p-2 bg-[#0303ce] bottom-[6rem] rounded-xl px-2 left-[2rem]">
              beach
            </div>
            <h5 className="ml-2 mt-4 text-[#333] text-center font-bold text-xl">
              Beach properties
            </h5>
          </Link>
          <Link
            to={`/properties?type=mountain$continent=1$priceRange=2`}
            className="shadow-2xl p-4 relative w-full md:w-[30%]"
          >
            <img
              src={img2}
              className="relative rounded-2xl w-full h-[400px] shadow-md  object-cover"
            />
            {/* <div>//{numberOfProperties?.mountain}//</div> */}
            <div className="absolute text-white p-2 bg-[#0303ce] bottom-[6rem] rounded-xl px-2 left-[2rem]">
              mountain
            </div>
            <h5 className="ml-2 mt-4 text-[#333] text-center font-bold text-xl">
              Mountain properties
            </h5>
          </Link>
          <Link
            to={`/properties?type=village$continent=1$priceRange=2`}
            className="shadow-2xl p-4 relative w-full md:w-[30%]"
          >
            <img
              src={img3}
              className="relative rounded-2xl w-full h-[400px] shadow-md  object-cover"
            />
            {/* <div>{numberOfProperties.Village}</div> */}
            <div className="absolute text-white p-2 bg-[#0303ce] bottom-[6rem] rounded-xl px-2 left-[2rem]">
              villiage
            </div>
            <h5 className="ml-2 mt-4 text-[#333] text-center font-bold text-xl">
              Village properties
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};
