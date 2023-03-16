import tasty from "../../assets/img/motor.png";
import { BsCheck2Circle } from "react-icons/bs";

export default function Tasty() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-3 md:gap-8">
      <div className="boxCenter w-full md:w-[40%]  rounded-lg">
        <img
          alt={tasty}
          src={tasty}
          className="h-[280px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex w-full md:w-[60%]  gap-2 flex-col">
        <div className="w-full boxStart gap-1 flex-col shadow-lg p-2 border rounded-md">
          <h1 className="font-semibold text-[30px]">
            Why<span className="text-rose-900">Tasty Treat?</span>
          </h1>
          <p className="colorGray text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 border rounded-md shadow-lg p-2">
          <div className="w-full boxStart flex-col ">
            <div className="w-full boxStart gap-2">
              <BsCheck2Circle size={16} className="text-rose-900 font-bold" />
              <span className="text-sm font-semibold">
                Fresh and tasty foods
              </span>
            </div>
            <span className="text-sm">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
          <div className="w-full boxStart flex-col">
            <div className="w-full boxStart gap-2">
              <BsCheck2Circle size={16} className="text-rose-900 font-bold" />
              <span className="text-sm font-semibold">Quality Support</span>
            </div>
            <span className="text-sm">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
          <div className="w-full boxStart flex-col">
            <div className="w-full boxStart gap-2">
              <BsCheck2Circle size={16} className="text-rose-900 font-bold" />
              <span className="text-sm font-semibold">
                Order from any location
              </span>
            </div>
            <span className="text-sm">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}