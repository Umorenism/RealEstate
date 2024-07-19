import { useState } from "react";

import { Link } from "react-router-dom";
import { Contact } from "../Contact";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div className=" sticky top-0 h-[60px] w-full z-10 bg-[#ffff] border-b-2 border-gray-300 ">
      <div className="flex justify-between m-auto max-w-[1100px] items-center h-full">
        <Link
          to="/"
          className="flex gap-1 items-center text-[#2512d1] text-2xl"
        >
          LANDS &{" "}
          <span>
            {" "}
            <Link
              to="/fashion"
              className="items-center text-[#2512d1] text-2xl"
            >
              FASHION
            </Link>
          </span>
        </Link>

        <div className="hidden md:flex">
          <ul className="flex gap-10  text-xl text-[#222] transition duration-200 cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/PopularProperties">
              <li>About</li>
            </Link>

            <Link to="/FeaturedProperties">
              <ul>Features</ul>
            </Link>
            <Link to="/NewsLetter">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="gap-4 flex ">
          <div className="hidden md:flex">
            <Link
              to="/signup"
              className="bg-[#2500ac] p-2 rounded-lg text-white text-center px-4"
            >
              Sign up
            </Link>
            <Link to="/signin" className=" p-2 text-center w-[80px]">
              Sign in
            </Link>

            <button
              onClick={openForm}
              className="bg-[#373346] p-2 rounded-lg text-white font-bold"
            >
              Book us
            </button>
          </div>

          {/* {open form} */}

          {showForm && <Contact closeForm={closeForm} />}
          <div className="lg:hidden flex items-center p-2">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "transparent" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/"
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/"
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            Featured
          </Link>

          <Link
            to="/"
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            Contact
          </Link>
          <div className=" lg:hidden">
            <button
              onClick={openForm}
              className="bg-[#13be41] text-white px-4 py-2 rounded-md hover:bg-hoverColor transition ease-out duration-300"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
