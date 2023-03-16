
import AllSection from "../../components/UI/AllSection";
import AllBanner from "../../components/UI/AllBanner";


export default function index() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
     
      <div className="w-full boxCenter ">
        <div className="w-full flex flex-col  containerBox gap-8">
          <AllBanner />
          <AllSection />
        </div>
      </div>
    </div>
  );
}