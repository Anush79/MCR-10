import ProductCard from "../components/ProductCard"
import { useData } from "../context/DataContext"

export default function Products (){
  const {iData} = useData()
  return (
    <div className="">
      <h1>Products Page</h1>
      <div className="container h-screen overflow-scroll w-full">
      {
        iData.map(item=><ProductCard item={item}/>)
      }
      </div>
     
    </div>
  )
}