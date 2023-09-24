import { createContext, useReducer, useContext, useMemo } from "react";
import { uiActions } from "./uiContextActions";

const uiReducer = ( state, action ) => {
  console.log( '[Ui Reducer]: payload -> ', action.payload );

  switch ( action.type ) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_BOOKMARK_COLOR":
      return { ...state, bookmarkColor: action.payload };
    case "CHANGE_BOOKMARK_FONTSIZE":
      return { ...state, fontS: action.payload }
    default:
      return state;
  }
};

export const UiContext = createContext();
export const useUiContext = () => useContext( UiContext )

export function UiProvider( { children } ) {
  const [state, dispatch] = useReducer( uiReducer, { color: null, bookmarkColor: "yellow", fontS: null } );

  const value = useMemo( () => ( {
    data: state,
    actions: uiActions( dispatch )
  } ), [] )


  return (
    <UiContext.Provider value={value}>
      {children}
    </UiContext.Provider>
  );
}
