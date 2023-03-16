import network from "../../assets/img/network.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "../../data/sliderData";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-8">
      <div className="lg:w-[50%] w-full  boxStart flex-col gap-3 ">
        <div className="p-2 flex flex-col">
          <h1 className="text-rose-900 font-semibold text-[18px]">
            Testimonial
          </h1>
          <h1 className="font-bold text-[27px]">
            What our <span className="text-rose-900">customers</span>are saying
          </h1>
          <p className="colorGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
       
          <Slider {...settings} className="flex gap-3 w-full p-2 flex-col shadow-md ">
            {sliderData.map((items) => (
              <div key={items.id}>
                <div
                key={items.id}
                className=" cursor-pointer  gap-3 boxStart flex-col w-full  overflow-y-auto"
              >
                <h3 className="colorGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h3>
                <div className="flex items-center  w-full gap-3">
                  <img
                    alt={items.image}
                    src={items.image}
                    className="rounded-full w-[70px] h-[70px] object-cover"
                  />
                  <span>{items.name}</span>
                </div>
              </div>
              </div>
            ))}
          </Slider>
        
      </div>
      <div className="lg:w-[50%] w-full flex">
        <img
          src={network}
          alt={network}
          className="h-[350px] w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}