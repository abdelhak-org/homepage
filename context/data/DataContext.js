

import { listsData } from "@/data/db";
import { createContext, useReducer, useContext, useMemo } from "react";
import { dataActions } from "./dataContextActions";
import { dataReducer } from "./dataReducer";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    listsData,
  });   
  const value = useMemo(()=>{
       return{
      listsData: state.listsData,
      dispatch,    
      dataActions: dataActions(dispatch)   
    }         
  },[state.listsData , dispatch]) 
  
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

//const { dispatch } = useDataContext();
export const useDataContext = () => useContext(DataContext);
 