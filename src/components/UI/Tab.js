
import allData from "../../data/AllData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSliceStore";

export default function Tab() {
  const { id } = useParams();
  

  const dataItem = allData.find((item) => item.id === id);

  const [dataImg, setDataImg] = useState(dataItem.image01);

  const { title, category, desc,price,image01 } = dataItem;

  const dispatch=useDispatch()
const addClick=()=>{
  dispatch(addItem({
   id,title,image01,price
  }))
 }
  return (
    <div className="w-full flex md:flex-row flex-col gap-2 md:gap-2">
      <div className="flex w-full md:w-[60%]">
        <div className="flex gap-2 md:gap-1 flex-col w-full md:flex-row">
          <div className="flex md:flex-col gap-2 boxCenter md:boxStart h-fit md:h-[310px] w-full md:w-[108px]  ">
            <div
              className="w-[100px] h-[100px] border p-2 cursor-pointer"
              onClick={() => setDataImg(dataItem.image01)}
            >
              <img
                src={dataItem.image01}
                alt={dataItem.image01}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-[100px] h-[100px] border p-2 cursor-pointer"
              onClick={() => setDataImg(dataItem.image02)}
            >
              <img
                src={dataItem.image02}
                alt={dataItem.image02}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-[100px] h-[100px] border p-2 cursor-pointer"
              onClick={() => setDataImg(dataItem.image03)}
            >
              <img
                src={dataItem.image03}
                alt={dataItem.image03}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 h-[315px] calc ">
            <div className="w-full h-full border p-2">
              <img
                src={dataImg}
                alt={dataImg}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2 py-4 md:py-2 md:px-2 md:p-2 md:w-[40%]  md:h-[315px] flex flex-col gap-3 border ">
        <h1 className="font-semibold text-lg">{title}</h1>
        <span className="text-rose-900">${price}</span>
        <p className="font-semibold text-sm">
          Category:<span>{category}</span>
        </p>
        <button className="btn w-fit text-sm" onClick={addClick}>Add to Cart</button>
      </div>
    </div>
  );
}