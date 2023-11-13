import { createContext, useReducer, useContext, useMemo } from "react";
import { uiActions } from "./uiContextActions";

const uiReducer = (state, action) => {
  console.log("[Ui Reducer]: payload -> ", action.payload);

  switch (action.type) {
    case "CHANGE_BG_COLOR":
      return { ...state, bgColor: action.payload };
    case "CHANGE_BOOKMARK_COLOR":
      return { ...state, bookmarkColor: action.payload };
    case "CHANGE_BOOKMARK_FONTSIZE":
      return { ...state, fontS: action.payload };
    default:
      return state;
  }
};
export const UiContext = createContext();

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, {
    bgColor: "#143F6B",
    bookmarkColor: "#00FFC6",
    textColor :"#fff",
    fontS: null,
  });
  const value = {
    uiData: { ...state },
    actions: uiActions(dispatch),
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
export const useUiContext = () => useContext(UiContext);
