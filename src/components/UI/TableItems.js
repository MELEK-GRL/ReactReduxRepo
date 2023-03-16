import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeBox } from "../../store/cartSliceStore";


export default function TableItems({item}) {
    const {id, quantity, title, image01, price } = item;
    const dispatch=useDispatch()

    const deleteItem=()=>{
        dispatch(removeBox(id))
    }
  
  return (
    <tr>
    <td className="p-1 border-slate-300 text-center boxCenter "><img alt={image01} src={image01} className='w-10 h-10 object-cover rounded-md'/></td>
    <td className=" p-1 border-slate-300 text-center text-sm">{title}</td>
    <td className="p-1 border-slate-300 text-center text-sm">${price}</td>
    <td className="p-1 border-slate-300 text-center text-sm">{quantity}px</td>
    <td className="p-1 h-12 border-slate-300 text-center boxCenter cursor-pointer">
      <MdDelete className="h-full" size={25} onClick={deleteItem}/>
    </td>
  </tr>
  )
}