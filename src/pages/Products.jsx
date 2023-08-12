import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useData } from "../context/DataContext";

export default function Products() {
  const { iData,filters, dispatch, sortedData  } = useData();
  return (
    <div className="">
      <h1 className="text-3xl font-bold ">Products Page</h1>
      <div className="filters flex items-center p-2 justify-around">
        <select name="department" onClick={(e)=>{dispatch({type:"DEPARTMENT", payload:e.target.value})}} id="">
          <option value="">Select Department</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label htmlFor="lowStock">
          <input type="checkbox" name="lowStock" id="lowStock" onClick={(e)=>{dispatch({type:"STOCK", payload:e.target.checked})}} />
        {" "}  Low Stock Items
        </label>
        <select name="sorting" id=""  onClick={(e)=>{dispatch({type:"SORT", payload:e.target.value})}} >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <NavLink to="/management">
          <button className="bg-blue-500 p-[0.5rem] w-24 rounded-lg text-white ">
            New
          </button>
        </NavLink>
      </div>
      <div className="productsHeading">
        <div>Image</div>
        <div>Name</div>
        <div>Description</div>
        <div>Price</div>
        <div>Stock</div>
        <div>Supplier</div>
      </div>
      <div className="container h-screen overflow-scroll w-full">
        {sortedData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
}
