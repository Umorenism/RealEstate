import { useState } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../Contact";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../asset/IMG-20240806-WA0007.jpg";

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
    <div className="sticky top-0 w-full z-10 bg-white border-b-2 border-gray-300">
      <div className="flex justify-between m-auto max-w-[1100px] items-center h-16 md:h-20 lg:h-24">
        <Link
          to="/"
          className="flex gap-1 items-center text-blue-600 text-xl md:text-2xl lg:text-3xl"
        >
          <img
            src={logo}
            alt=""
            className="h-12 md:w-20 md:h-20 w-12 bg-black ml-1"
          />
        </Link>

        <div className="hidden md:flex">
          <ul className="flex gap-6 md:gap-10 lg:gap-14 text-lg md:text-xl lg:text-2xl text-gray-800 transition duration-200 cursor-pointer">
            <Link to="/">
              <li className="hover:text-blue-500">Home</li>
            </Link>
            <Link to="/popularproperty">
              <li className="hover:text-blue-500">Popular Properties</li>
            </Link>
            <Link to="/featured">
              <li className="hover:text-blue-500">Fatured</li>
            </Link>
            <Link to="/newsletter">
              <li className="hover:text-blue-500">Newletter</li>
            </Link>
          </ul>
        </div>

        <div className="gap-4 flex">
          <div className="hidden md:flex">
            <button
              onClick={openForm}
              className="bg-gray-800 p-2 rounded-lg text-white font-bold hover:bg-gray-700"
            >
              Book us
            </button>
          </div>

          {/* {open form} */}
          {showForm && <Contact closeForm={closeForm} />}

          <div className="md:hidden flex items-center p-2">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-xl  md:text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}
        >
          <ul className=" mt-10">
            <Link to="/">
              <li className="hover:text-blue-500 py-4">Home</li>
            </Link>
            <Link to="/popularproperty">
              <li className="hover:text-blue-500 py-4">Popular Properties</li>
            </Link>
            <Link to="/featured">
              <li className="hover:text-blue-500 py-4">Fatured</li>
            </Link>
            <Link to="/newsletter">
              <li className="hover:text-blue-500 py-4">Newletter</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <button
              onClick={openForm}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-out duration-300"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
