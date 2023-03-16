import React from "react";
import burger from "../../assets/img/hamburgers.webp";
import pizza from "../../assets/img/pizza.jpg";
import bread from "../../assets/img/bonfile.jpg";
import AllData from "../../data/AllData";
import ProducCard from "./ProducCard";
import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Products() {
  const [category, setCategory] = useState("ALL");
  const [allProduct, setAllProduct] = useState(AllData);

  const [animationParent] = useAutoAnimate();
  useEffect(() => {
    if (category == "ALL") {
      setAllProduct(AllData);
    }
    if (category == "PIZZA") {
      const filterAllData = AllData.filter((item) => item.category == "Pizza");
      setAllProduct(filterAllData);
    }
    if (category == "BURGER") {
      const filterAllData = AllData.filter((item) => item.category == "Burger");
      setAllProduct(filterAllData);
    }
    if (category == "BREAD") {
      const filterAllData = AllData.filter((item) => item.category == "Bread");
      setAllProduct(filterAllData);
    }
  }, [category]);

  return (
   <div className="flex flex-col w-full gap-4 boxCenter">
 <h1 className="colorPage">Popular Pizza</h1>
    <div className="boxCenter w-full flex-col gap-2 ">
     
      <div className="boxCenter gap-5 md:gap-10 w-full overflow-x-scroll scroll-m-0 md:overflow-hidden  bg-rose-900 p-3 rounded">
        <button
          className={`footerText boxCenter  text-white gap-1 text-lg  ${
            category == "ALL"
              ? "border-white border-b p-1  text-rose-900"
              : "footerText"
          }`}
          onClick={() => setCategory("ALL")}
        >
          <p>All</p>
        </button>
        <button
          className={`footerText boxCenter  text-white gap-1 text-lg  ${
            category == "BURGER"
              ?  "border-white border-b p-1  text-rose-900"
              : "footerText"
          }`}
          onClick={() => setCategory("BURGER")}
        >
          <img
            alt={burger}
            src={burger}
            className=" noneBox w-0 md:w-5 h-5 object-cover rounded"
          />
          <p>Burger</p>
        </button>
        <button
          className={`footerText boxCenter  text-white gap-1 text-lg  ${
            category == "PIZZA"
              ?  "border-white border-b p-1  text-rose-900"
              : "footerText"
          }`}
          onClick={() => setCategory("PIZZA")}
        >
          <img
            alt={pizza}
            src={pizza}
            className="noneBox w-0 md:w-5 h-5 object-cover rounded"
          />
          <p>Pizza</p>
        </button>
        <button
          className={`footerText boxCenter  text-white gap-1 text-lg  ${
            category == "BREAD"
              ?  "border-white border-b p-1  text-rose-900"
              : "footerText"
          }`}
          onClick={() => setCategory("BREAD")}
        >
          <img
            alt={bread}
            src={bread}
            className="noneBox w-0 md:w-5 h-5 object-cover rounded"
          />
          <p>Bread</p>
        </button>
      </div>
      <div
        ref={animationParent}
        className=" w-full    gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start"
      >
        {allProduct.map((item) => (
          <div key={item.id} className="border shadow-md rounded  p-2 gap-2">
            <ProducCard item={item} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}