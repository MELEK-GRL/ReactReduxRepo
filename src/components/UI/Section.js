import React from "react";
import homeImg from "../../assets/img/homeImg.jpg";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { BsTagsFill } from "react-icons/bs";
import Categories from "../../components/UI/Categories";
import Text from "./Text";
import Card from "./Card";
import Products from "./Products";
import Tasty from "./Tasty";
import Hot from "./Hot";
import Testimonial from "./Testimonial";

export default function Section() {
  return (
    <div className="boxCenter  flex-col  w-full   gap-8">
      <div className="flex w-full gap-8  lg:gap-3 lg:flex-row flex-col">
        <div className="boxStart justify-center w-full lg:w-[35%] flex-col gap-3">
          <p className="font-bold text-[23px] whitespace-nowrap">
            Easy way to make an order
          </p>
          <div className="boxStart flex-col ">
            <div className="w-full boxStart items-center colorText whitespace-nowrap font-bold text-[30px] md:text-[45px]">
              <h1> Hungry?</h1>
              <span className="text-black font-bold text-[25px] md:text-[40px]">
                Just wait
              </span>
            </div>
            <div className="w-full boxStart items-center whitespace-nowrap text-black font-bold text-[25px] md:text-[40px]">
              <h1>food at</h1>
              <span className="colorText font-bold text-[30px] md:text-[45px]">
                your door
              </span>
            </div>
          </div>
          <span className="colorGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <div className="gap-3 boxStart">
            <Link to="#" className="btn">
              Order Now
            </Link>
            <Link to="#" className="btn">
              See all foods
            </Link>
          </div>
          <div className="gap-3 md:flex-row flex-col boxStart">
            <div className="flex  gap-2 boxCenter">
              <AiFillCar className="btn p-1" size={26} />
              <span className="whitespace-nowrap text-[15px] md:text-[17px]">No shipping charge</span>
            </div>
            <div className="flex gap-2 boxCenter">
              <BsTagsFill className="btn p-1" size={26} />
              <span className="whitespace-nowrap text-[15px] md:text-[17px]">100% secure checkout</span>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-[65%] ">
          <img
            alt={homeImg}
            src={homeImg}
            className=" rounded-lg object-cover w-full h-[400px]"
          />
        </div>
      </div>
      <Categories/>
      <Text/>
      <Card/>
      <Products/>
      <Tasty/>
      <Hot/>
      <Testimonial/>
    </div>
  );
}