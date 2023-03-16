import ProducCard from "../UI/ProducCard";
import SearchDrapdown from "./SearchDrapdown";
import allData from "../../data/AllData";
import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import ReactPaginate from "react-paginate";

export default function AllSection() {
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(0);



  const searched=allData.filter((item) => {
    if (search.value == "") return item;

    if (item.title.toLowerCase().includes(search.toLocaleLowerCase()))
      return item;
  })
  const productPerPage = 8;
  const visitePage = productPerPage * pageNum;
  const displayPage = searched.slice(visitePage, visitePage + productPerPage);

  const pageCount = Math.ceil(allData.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="w-full flex-col gap-8 boxCenter  rounded">
       <SearchDrapdown search={search} setSearch={setSearch}/>
        <div className=" w-full gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start">
          {displayPage
            
            .map((item) => (
              <div
                key={item.id}
                className="border shadow-md rounded  p-2 gap-2"
              >
                <ProducCard
                  search={search}
                  setSearch={setSearch}
                  allData={allData}
                  item={item}
                />
              </div>
            ))}
        </div>
        <div className="flex w-full">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Prev"
            nextLabel="Next"
            containerClassName="paginationBttns"
          />
        </div>
      </div>
    </div>
  );
}