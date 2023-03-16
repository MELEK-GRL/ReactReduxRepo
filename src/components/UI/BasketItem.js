
import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem,removeItem,removeBox } from "../../store/cartSliceStore";

export default function BasketItem({item}) {
  const{id,title,price,image01,quantity,totalPrice}=item

  const dispatch=useDispatch()

  const countTogglePlus=()=>{
    dispatch(addItem({
      id,
      title,
      price,
      image01
    }))
  }
  const countToggleminus=()=>{
    dispatch(removeItem(id))
  }
  const countToggleDelete=()=>{
    dispatch(removeBox(id))
  }

  return (
   
       <div className="flex w-full flex-col justify-between border rounded-md p-1">
       <div className="flex w-full gap-3">
         <div className=" w-[13%] flex">
           <img
             alt={image01}
             src={image01}
             className="object-cover w-6 h-6 rounded-full"
           />
         </div>
         <div className="flex flex-col gap-1 w-[37%]">
           <h6 className="font-semibold ">{title}</h6>
           <div className="flex justify-between w-full">
             <span className="font-semibold text-sm">{quantity}x</span>
             <span className="font-semibold text-sm">${totalPrice}</span>
           </div>
           <div className="flex ">
             <button className="countBtnLeft">
               <AiOutlinePlus size={12} onClick={countTogglePlus} />
             </button>
             <span className="p-1 border  ">{quantity}</span>
             <button className="countBtnRight">
               <BiMinus size={12} onClick={countToggleminus}/>
             </button>
           </div>
         </div>
         <div className="flex justify-end w-[50%] ">
           <RxCross1 size={15} className="cursor-pointer " onClick={countToggleDelete}/>
         </div>
       </div>
     </div>
   
  );
}