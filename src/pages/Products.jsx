import ProductCard from "../components/ProductCard"
import { useData } from "../context/DataContext"

export default function Products (){
  const {iData} = useData()
  return (
    <div className="">
      <h1 className="text-3xl font-bold ">Products Page</h1>
     <div className="filters">
      <select name="department" id="">
        <option value="">Select Department</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
     </div>
      <div className="container h-screen overflow-scroll w-full">
      {
        iData.map(item=><ProductCard item={item}/>)
      }
      </div>
     
    </div>
  )
}