import allData from "../../data/AllData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import sliderData from "../../data/sliderData";
import ProducCard from "../UI/ProducCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSliceStore";

export default function Comments() {
  const { id } = useParams();
  const dataItem = allData.find((item) => item.id === id);
  const { title, category, desc, price, image01 } = dataItem;
  const [comments, setComments] = useState("desc");
  const [dataImg, setDataImg] = useState(dataItem.image01);

  const liked = allData.filter((item) => category == item.category);

  const[names,setNames]=useState('')
  const[mail,setMail]=useState('')
  const[msg,setMsg]=useState('')

  const mshHandle=(e)=>{
    e.preventDefault()
console.log(msg,mail,names)
  }

  useEffect(() => {
    setDataImg(allData.image01);
  }, [allData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dataItem]);

  return (
    <div className="flex flex-col boxStart w-full gap-1">
      <div className="boxStart w-full gap-3">
        <button
          className={`${
            comments == "desc"
              ? "text-rose-900 text-[16px] font-semibold"
              : " text-[16px] font-semibold"
          }`}
          onClick={() => setComments("desc")}
        >
          Description
        </button>
        <button
          className={`${
            comments == "rev"
              ? "text-rose-900 text-[16px] font-semibold"
              : " text-[16px] font-semibold"
          }`}
          onClick={() => setComments("rev")}
        >
          Review
        </button>
      </div>
      {comments == "desc" ? (
        <div className="w-full flex p-2 border rounded flex-col gap-3">
          <p className="text-[13px]">{desc}</p>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">You might also like</h1>
            <div className=" w-full    gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start">
              {liked.map((item) => (
                <div
                  key={item.id}
                  className="border shadow-md rounded  p-2 gap-2"
                >
                  <ProducCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-3 h-auto  overflow-auto max-h-[450px] border p-2 ">
            {sliderData.map((x) => (
              <div key={x.id} className="flex w-full gap-1 flex-col border-b">
                <img
                  src={x.image}
                  alt={x.image}
                  className="w-10 h-10 object-cover border border-rose-900 rounded-full"
                />
                <h6 className="text-[13px] font-semibold">{x.name}</h6>
                <span className="text-[13px] font-semibold">{x.mail}</span>
                <span className="text-[13px] font-semibold">great product</span>
              </div>
            ))}
           
          </div>
          <div className="flex  w-[%50] boxCenter border rounded p-2">
              <form onSubmit={mshHandle} className="bg-rose-200 boxCenter w-full  flex-col gap-3 border rounded p-2">
                <input
                onChange={(e)=>setNames(e.target.value)}
                required
                  type="text"
                  className=" text-sm bg-rose-200 w-full p-2 border-b placeholder:text-sm placeholder:text-white"
                  placeholder="Name"
                />
                <input
                onChange={(e)=>setMail(e.target.value)}
                required
                  type="email"
                  className="text-sm  bg-rose-200 w-full p-2 border-b placeholder:text-sm placeholder:text-white"
                  placeholder="Mail"
                />
                <textarea
                onChange={(e)=>setMsg(e.target.value)}
                required
                  className="text-sm bg-rose-200 w-full h-[70px] border-b max-h-[100px] p-2 placeholder:text-white placeholder:text-sm"
                  placeholder="Your message"
                />
                <button className="btn text-sm ">Submit</button>
              </form>
            </div>
        </div>
      )}
    </div>
  );
}