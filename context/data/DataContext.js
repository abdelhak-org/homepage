

import { listsData } from "@/data/db";
import { createContext, useReducer, useContext } from "react";
import { dataActions } from "./dataContextActions";
import { dataReducer } from "./dataReducer";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    listsData,searchValue: "",
  });   
  const value = {
       
      listsData:state.listsData.map((list)=> {
        return {
          ...list, 
          items : list.items.filter((item)=> item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
      }).filter((list)=> list.items.length > 0),
      dispatch,   
      searchValue: state.searchValue, 
      dataActions: dataActions(dispatch)   
    }         
   
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
//const { dispatch } = useDataContext();
export const useDataContext = () => useContext(DataContext);
 