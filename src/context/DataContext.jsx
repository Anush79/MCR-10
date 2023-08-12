import { createContext, useContext, useReducer, useState } from 'react';
import {v4 as uuid} from "uuid";
import { inventoryData } from '../data/data';
import {toast} from 'react-toastify'
export const DataContext = createContext();

const initialValue = {
  department:"",
  stock:false,
  sort:""
  }

const reducerFunction= (state, action)=>{
   const {type, payload} = action;
   switch (type) {
    case "DEPARTMENT":
      return {...state, department:payload}
    case "STOCK":
        return {...state, stock:payload}
    case "SORT":
      return {...state, sort:payload}
    default:
      return state;
   }
}


export function DataProvider({children}){
  const [filters, dispatch ] = useReducer(reducerFunction, initialValue)
  const [iData, setIData] = useState(inventoryData)
  
  const handleAddNewProduct = (newProduct)=>{
    console.log(newProduct)
     toast.success(`${newProduct.name} Added to Inventory`)
  }

  const filteredData = filters.department.length >0?
  inventoryData.filter(item=>item.department === filters.department)
  :inventoryData;

  const stockData  = filters.stock ? filteredData.filter(item=> item.stock <= 10): filteredData
  
  const sortedData = filters.sort.length > 0? stockData.sort((a, b)=> a[filters.sort]-b[filters.sort]) : stockData
  


  return <DataContext.Provider value= {{iData,inventoryData,filters, dispatch, sortedData,handleAddNewProduct }}>
    {children}
  </DataContext.Provider>
}

export const useData =()=> useContext(DataContext);