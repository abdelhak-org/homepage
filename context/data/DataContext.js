import { bookmarksData, listsData } from "@/data/db";
import { createContext, useMemo, useReducer, useContext } from "react";
import { dataActions } from "./dataContextActions";
import { dataReducer } from "./dataReducer";

export const DataContext = createContext();


export function DataContextProvider( { children } ) {
  const [state, dispatch] = useReducer( dataReducer, { listsData, bookmarksData } );
  
  const value =  {
    listsData: state.listsData,
    bookmarksData: state.bookmarksData,
    dispatch: dispatch,
    dataActions: dataActions( dispatch )
  };


  return (
    <DataContext.Provider value={value} >
      {children}
    </DataContext.Provider>
  );
}


    //const { dispatch } = useDataContext();
    export const useDataContext = () => useContext( DataContext )