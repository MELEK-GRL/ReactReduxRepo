import { useSelector } from "react-redux";
import { useState } from "react";

export default function CheckItem() {
  const { totalAmount } = useSelector((state) => state.cart);
  const shipping = 30;
  const TotalCart = totalAmount + Number(shipping);

  const [names, setNames] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const ShippingInfo=[]
  
  const shopHandle = (e) => {
    e.preventDefault();
    const ShippingAdress={
        name:names,
        email:mail,
        msg:msg,
        phone:phone,
        city:city
    }
    ShippingInfo.push(ShippingAdress)
    console.log(ShippingInfo)
  };
  return (
    <div className="flex lg:flex-row flex-col w-full gap-3 lg:gap-2">
      <div className="flex w-full lg:w-[80%] boxCenter border rounded p-2 ">
        <form
          onSubmit={shopHandle}
          className="w-[50%] boxCenter  flex-col gap-3 border rounded p-2"
        >
          <input
            onChange={(e) => setNames(e.target.value)}
            required
            type="text"
            className=" text-sm w-full p-2 border-b placeholder:text-sm"
            placeholder="Name"
          />
          <input
            onChange={(e) => setMail(e.target.value)}
            required
            type="text"
            className="text-sm  w-full p-2 border-b placeholder:text-sm"
            placeholder="Mail"
          />
          <input
             onChange={(e)=>setPhone(e.target.value)}
            required
            type="number"
            className=" text-sm w-full p-2 border-b placeholder:text-sm"
            placeholder="Phone"
          />
          <input
             onChange={(e)=>setCity(e.target.value)}
            required
            type="text"
            className=" text-sm w-full p-2 border-b"
            placeholder="City"
          />
          <textarea
            onChange={(e) => setMsg(e.target.value)}
            required
            className="text-sm w-full h-[70px] border-b max-h-[100px] p-2  placeholder:text-sm"
            placeholder="Your message"
          />
          <button  className="btn text-sm ">Payment</button>
        </form>
      </div>
      <div className="flex w-full lg:w-[20%] h-fit flex-col gap-3 rounded bg-red-200 p-2">
        <div className="w-ful flex flex-col gap-2 border-b py-1">
          <h6 className="font-semibold text-sm text-white">
            Subtotal: <span>${totalAmount}</span>
          </h6>
          <h6 className="font-semibold text-sm text-white">
            Shipping: <span>{shipping}</span>
          </h6>
        </div>
        <h6 className=" font-semibold text-sm text-white">
          Tottal: <span>{TotalCart}</span>
        </h6>
      </div>
    </div>
  );
}