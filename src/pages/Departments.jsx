import { useNavigate } from "react-router-dom"
import { useData } from "../context/DataContext";

export default function Departments (){
  const navigate=  useNavigate()
  const {dispatch} = useData()
  const onClickHandler = (e)=>{
 navigate('/products');
 dispatch({type:"DEPARTMENT", payload:e.target.textContent})
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">Departments Page</h1>
      <div className="flex gap-6 justify-center p-4 font-bold text-xl">
        <div className="dash-card cursor-pointer" onClick={onClickHandler}>Kitchen</div>
        <div className="dash-card cursor-pointer" onClick={onClickHandler}>Clothing</div>
        <div className="dash-card cursor-pointer"onClick={onClickHandler}>Toys</div>
        </div>
    </div>
  )
}