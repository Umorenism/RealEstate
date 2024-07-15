import { FiSend } from "react-icons/fi";

export const NewsLetter = () => {
  return (
    <div className="min-h-full  w-full mt-24 p-4">
      <div className="max-w-[1100px] h-full m-auto flex flex-col items-center">
        <div className="flex items-center flex-col gap-2">
          <h5 className="text-[#777] font-semibold text-xl">
            Want to get latest offers?
          </h5>
          <h2 className="text-[#333] text-3xl">
            Send us your emailand we will do the rest
          </h2>
        </div>
        <div className="flex mt-4 border-gray-500 border rounded-lg h-[50px] w-[350px] p-2 justify-between items-center">
          <input
            type="email"
            placeholder="Type your email.."
            className="border-none outline-none pl-1"
          />
          <FiSend size={25} />
        </div>
      </div>
    </div>
  );
};
