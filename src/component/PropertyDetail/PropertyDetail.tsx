import pic from "../../asset/house4.png";
import pic2 from "../../asset/house.png";

export const PropertyDetail = () => {
  return (
    <div className=" min-h-screen p-4 justify-center flex items-center bg-slate-400">
      <div className="bg-red-500 m-auto py-4 max-w-[1100px] flex gap-4 md:flex-row flex-col">
        <img src={pic} alt="" className="p-4" />
        <div>
          <img src={pic2} alt="" className="p-4" />
          <div>hello</div>
        </div>
      </div>
    </div>
  );
};
