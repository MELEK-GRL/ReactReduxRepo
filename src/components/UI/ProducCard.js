import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSliceStore";

export default function ProducCard({ item }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        image01,
        price,
      })
    );
    console.log(addItem)
  };
  const { id, title, image01, price } = item;
  return (
    <div className=" w-full boxCenter p-2">
      <Link to={`/foods/${id}`} className="gap-3 flex flex-col boxCenter">
        <img
          alt={image01}
          src={image01}
          className="hover:transform hover:scale-110 hover:anime  object-cover cursor-pointer rounded-full h-[120px] w-[120px]"
        />
        <div className="boxCenter flex-col gap-2">
          <p className=" text-clip overflow-hidden h-7 font-semibold">
            {title}
          </p>
          <span className="font-bold text-[16px] text-rose-900">$ {price}</span>
          <button onClick={addToCart} className="btn text-sm w-fit p-1">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}