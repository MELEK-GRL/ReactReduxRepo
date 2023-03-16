
import LoginBanner from '../../components/UI/LoginBanner'
import LoginItems from '../../components/UI/LoginItems'
export default function index() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
       
      <div className="w-full boxCenter  max-h-full  h-auto min-h-[413px]">
        <div className="w-full flex flex-col  containerBox gap-8">
        <LoginBanner/>
        <LoginItems/>
        </div>
      </div>
    </div>
  )
}