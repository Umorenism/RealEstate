// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaSquareFull } from "react-icons/fa";

import pic from "../../../public/b.jpg";

const featuredProperties = [
  {
    id: 1,
    img: "url('../public/b.jpg)",
    desc: "Lorem, ipsum dolor sit ",
    bed: "4 beds",
    sqm: "200 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
  {
    id: 1,
    img: "url('b.jpg)",
    desc: "Lorem, ipsum dolor ",
    bed: "3 beds",
    sqm: "500 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
  {
    id: 1,
    img: "url('b.jpg)",
    desc: "Lorem, ipsum dolor ",
    bed: "3 beds",
    sqm: "500 Square meter",
    ownerprice: "$500",
    price: "$5000",
  },
];

export const FeaturedProperties = () => {
  // const [featuredProperties, setFeaturedProperties] = useState([]);

  // useEffect(() => {
  //   const fetchFeatured = async () => {
  //     try {
  //       // const data = await request("/property/find/featuredm", "GET");
  //       setFeaturedProperties(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchFeatured();
  // }, []);

  return (
    <div className="h-full w-full mt-[7.5rem]">
      <div className="max-w-[1100px] h-full mx-auto flex-wrap md:flex-row  p-5 flex items-center flex-col justify-center">
        <div className="flex items-center flex-col gap-[0.5rem]">
          <h5 className="text-[#777] text-xl font-normal">
            Properties you may like
          </h5>
          <h2 className="text-[#777] text-2xl font-bold">
            Our featured properties
          </h2>
        </div>

        {/* <div>
          {featuredProperties.map((item, index) => (
            <div key={PropertyDetail._id}>
              <Link to={`/propertyDetail/${property._id}`}></Link>
              <div>
                <div>
                  <div>
                    <span>${Property?.price}</span>
                    <img />
                  </div>
                  <div>
                    <span>
                      {property?.beds} beds
                      <FaBed />
                    </span>
                    <span>{proprty?.sqmeters} square meters</span>
                  </div>
                  <div>{proprty?.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full mt-[3rem] flex flex-col md:flex-row gap-5 items-center justify-center  border-red-400">
          {featuredProperties.map((item) => {
            return (
              <div className=" p-4 shadow-2xl rounded-xl">
                <Link to="/propertyDetail">
                  <img
                    src={pic}
                    className="max-h-[300px] w-full object-cover"
                  />
                </Link>
                <div>
                  <div className="flex items-center justify-between py-4 gap-3">
                    <span>{item.ownerprice}</span>
                    <img src={pic} className="h-[40px] w-[40px] rounded-full" />
                  </div>
                  <div className="flex gap-4">
                    <span className="flex gap-2 items-center justify-center">
                      {item.bed} <FaBed ize={20} className="text-blue-500" />
                    </span>
                    <span className="flex justify-center items-center gap-2">
                      {item.sqm}{" "}
                      <FaSquareFull size={20} className="text-blue-500" />
                    </span>
                  </div>
                  <div>{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
