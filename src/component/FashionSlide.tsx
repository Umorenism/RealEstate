import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fashionPic1 from "../asset/fashionpic.png";
import fashionPic2 from "../asset/fashionpic3.png";
import fashionPic3 from "../asset/fashionpic3.png";
import { Link } from "react-router-dom";

const imageList = [fashionPic1, fashionPic2, fashionPic3];

export const FashionSlide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-full w-full mt-24 p-4 bg-gradient-to-r from-gray-400 to-gray-800">
      <div className="max-w-6xl p-4 min-h-[400px] m-auto">
        <h1 className="text-center mb-4 text-white md:text-4xl py-4">
          LATEST FROM OUR FASHION STORE
        </h1>
        <Slider {...settings}>
          {imageList.map((image, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Fashion ${index}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700 py-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, veniam?
                  </p>
                  <Link to="/fashion">
                    <button className="bg-blue-700 w-full text-white p-2 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
