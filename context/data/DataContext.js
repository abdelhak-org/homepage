import { bookmarksData, listsData } from "@/data/db";
import { createContext, useMemo, useReducer, useContext } from "react";
import { dataActions } from "./dataContextActions";
import { dataReducer } from "./dataReducer";

export const DataContext = createContext();

export const useDataContext = () => useContext( DataContext )

export function DataContextProvider( { children } ) {
  const [state, dispatch] = useReducer( dataReducer, { listsData, bookmarksData } );

  const value = useMemo( () => ( {
    listsData: state.listsData,
    bookmarksData: state.bookmarksData,
    actions: dataActions( dispatch )
  } ), [state.listsData, state.bookmarksData] );


  return (
    <DataContext.Provider value={value} >
      {children}
    </DataContext.Provider>
  );
}