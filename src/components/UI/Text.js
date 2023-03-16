import React from "react";

export default function Text() {
  return (
    <div className="w-full flex gap-3 flex-col items-center justify-start">
      <div className="boxCenter w-full flex-col gap-2">
        <h1 className="text-rose-900 font-semibold text-[18px]">
          What we serve
        </h1>
        <div className="w-full boxCenter flex-col">
          <h1 className="font-bold text-[27px]">Just sit back at Home</h1>
          <h1 className="font-bold text-[27px]">
            we will <span className="text-rose-900">take care</span>
          </h1>
        </div>
      </div>
      <div className=" flex flex-col">
        <p className="colorGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <p className="colorGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
  );
}