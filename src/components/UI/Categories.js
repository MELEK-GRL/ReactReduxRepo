
import categoriesData from '../../data/categoriesData'

export default function Categories() {
  return (
    <div className='w-full gap-4 text-white grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  items-center'>
    {categoriesData.map((x)=>(
        <div key={x.id} className='categoriesBox'>
            <img alt={x.name} src={x.image} className='h-[80px] w-[80px] rounded-full object-cover'/>
            <p className='w-[30%]'>{x.name}</p>
        </div>
    ))}
    </div>
  )
}