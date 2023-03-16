import React from "react";
import ProducCard from './ProducCard'
import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import AllData from "../../data/AllData";

export default function Hot() {
  const [animationParent] = useAutoAnimate();

  const [allProduct, setAllProduct] = useState(AllData);
  const[hotPizza,setHotPizza]=useState([])

  useEffect(() => {
  const filterHotPizza=allProduct.filter(item=>item.category=='Pizza')
  const slicePizza=filterHotPizza.slice(0,4)
  setHotPizza(slicePizza)
  }, [])
  
  return (
    <div className="flex flex-col w-full gap-4 boxCenter">
      <h1 className="colorPage">Hot Pizza</h1>
      <div
        ref={animationParent}
        className=" w-full  gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start"
      >
        {hotPizza.map((item) => (
          <div key={item.id} className="border shadow-md rounded  p-2 gap-2">
            <ProducCard item={item}/>
          </div>
        ))}
        
      </div>
    </div>
  );
}