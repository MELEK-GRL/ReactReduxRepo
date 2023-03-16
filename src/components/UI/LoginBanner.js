
import allFoods from "../../assets/img/Allfoods.jpg";

export default function LoginBanner() {
  return (
    <div className="w-full flex h-[130px]  lg:h-[160px]">
    <div className="flex  w-full justify-center flex-col">
      <img
        alt={allFoods}
        src={allFoods}
        className="w-full   opacity-75 h-full  object-cover bg-no-repeat"
      />
      <h1 className="uppercase absolute text-xl ml-[10%] text-slate-200 font-semibold">
        login
      </h1>
    </div>
  </div>
  )
}