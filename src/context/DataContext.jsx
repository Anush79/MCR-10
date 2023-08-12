import {createContext, useContext, useState} from 'react';
import {inventoryData} from '../data/data'

export const DataContext = createContext();

export function DataProvider({children}){

  const [iData, setIData] = useState(inventoryData)
  

  return <DataContext.Provider value= {{iData,inventoryData}}>
    {children}
  </DataContext.Provider>
}

export const useData =()=> useContext(DataContext);