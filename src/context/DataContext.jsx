import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { inventoryData } from "../data/data";
import { toast } from "react-toastify";
export const DataContext = createContext();

const initialValue = {
  department: "",
  stock: false,
  sort: "name",
};

const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DEPARTMENT":
      return { ...state, department: payload };
    case "STOCK":
      return { ...state, stock: payload };
    case "SORT":
      return { ...state, sort: payload };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [filters, dispatch] = useReducer(
    reducerFunction,
    JSON.parse(localStorage.getItem("filters")) || initialValue
  );
  const [iData, setIData] = useState(JSON.parse(localStorage.getItem("inventoryData")) || inventoryData);

  const handleAddNewProduct = (newProduct) => {
    console.log(newProduct);
    setIData([ {...newProduct,id:uuid()}, ...iData])
    toast.success(`${newProduct.name} Added to Inventory`);
  };
console.log(uuid())
  const filteredData =
    filters.department.length > 0
      ? iData.filter((item) => item.department === filters.department)
      : iData;

  const stockData = filters.stock
    ? filteredData.filter((item) => item.stock <= 10)
    : filteredData;

  // const sortedData =
  //   filters.sort.length > 0
  //     ? stockData.sort((a, b) => a[filters.sort] - b[filters.sort])
  //     : stockData;
  const sortedData =
  filters.sort.length > 0
    ? stockData.sort((a, b) =>{
      console.log( a[filters.sort],b[filters.sort] ,"filt")
      return a[filters.sort] - b[filters.sort]})
    : stockData;

  useEffect(() => {
    localStorage.setItem("filters",  JSON.stringify(filters));
    localStorage.setItem("inventoryData",  JSON.stringify(iData));
  }, [filters, iData]);

  return (
    <DataContext.Provider
      value={{
        iData,
        inventoryData,
        filters,
        dispatch,
        sortedData,
        handleAddNewProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
