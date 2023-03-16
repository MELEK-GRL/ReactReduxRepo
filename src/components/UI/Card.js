import cardData from "../../data/cardData";

export default function Card() {
  return (
    <div className=" gap-3 lg:gap-0 grid-cols-1  grid md:grid-cols-2 lg:grid-cols-3 w-full">
      {cardData.map((x) => (
        <div key={x.id} className="boxCenter gap-3 flex-col">
          <img
            alt={x}
            src={x.image}
            className="object-cover w-[170px] h-[170px] rounded-md"
          />
          <div className=" boxStart gap-1 flex-col">
            <p className="font-semibold text-[17px]">{x.name}</p>
            <p className="colorGray">{x.title}</p>
            <p className="colorGray">{x.minut}</p>
          </div>
        </div>
      ))}
    </div>
  );
}