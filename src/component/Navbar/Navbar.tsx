import { BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className=" sticky  top-0 left-0 h-[60px] w-sfull z-10 bg-[#ffff] border-b-2 border-gray-300 ">
      <div className="flex justify-between m-auto max-w-[1100px] items-center h-full">
        <Link
          to="/"
          className="flex gap-2 items-center text-[#2512d1] text-2xl"
        >
          RealEstate <BsHouseDoor />
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
        <div className="gap-4 flex">
          <Link
            to="/signup"
            className="bg-[#2500ac] p-2 rounded-full text-white text-center w-[80px]"
          >
            Sign up
          </Link>
          <Link to="/signin" className=" p-2 text-center w-[80px]">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
