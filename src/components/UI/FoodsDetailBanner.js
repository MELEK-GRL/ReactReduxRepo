import React from 'react'
import allData from "../../data/AllData";

import { useParams } from "react-router-dom";

export default function FoodsDetailBanner() {
    const { id } = useParams();
    const dataItem = allData.find((item) => item.id === id);
    const { title} = dataItem;
  return (
    <div className="w-full flex h-[130px]  lg:h-[160px]">
    <div className="flex  w-full justify-center flex-col">
      <img
        alt={dataItem.image01}
        src={dataItem.image01}
        className="w-full   opacity-90 h-full  object-cover bg-no-repeat"
      />
      <h1 className="uppercase absolute text-xl ml-[10%] text-slate-100 font-semibold">
        {title}
      </h1>
    </div>
  </div>
  )
}