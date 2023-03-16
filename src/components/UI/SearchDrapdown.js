import { BiSearchAlt } from "react-icons/bi";
import { useState,useEffect} from "react";



export default function SearchDrapdown({search,setSearch}) {

 
  return (
    <div className="flex w-full border p-2 gap-8">
    <form className="flex items-center">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search || ""}
        type="text"
        placeholder=""
        className="rounded-l border placeholder:p-1 font-semibold w-[300px] h-8"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className=" p-0 searchBtn rounded-r border w-[35px] h-8"
      >
        <BiSearchAlt className="w-full h-[80%]" />
      </button>
    </form>
{/* 
    <select className="border rounded h-8">
      <option>Default</option>
      <option value="ascending">Alphabetically A-Z</option>
      <option value="descending">Alphabetically Z-A</option>
      <option value="high-price">High Price</option>
      <option value="low-price">Low Price</option>
    </select> */}
  </div>
  )
}