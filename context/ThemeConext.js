import { createContext, useReducer } from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_BOOKMARK_COLOR" :
      return {...state ,bookmarkColor:action.payload};
    case "CHANGE_BOOKMARK_FONTSIZE" :
      return {...state , fontS:action.payload}
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color:null ,bookmarkColor:"yellow" ,fontS :null  });

  const ChangeBgColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
    console.log(color)

  };
  const ChangeBookmarkColor = (color) => {
    dispatch({ type: "CHANGE_BOOKMARK_COLOR", payload: color });
    console.log(color)

  };
  const ChangeBookFontSize = (size) => {
    dispatch({ type: "CHANGE_BOOKMARK_FONTSIZE", payload: size });
    console.log(size)
  };


  return (
    <ThemeContext.Provider value={{ ...state, ChangeBgColor , ChangeBookmarkColor  , ChangeBookFontSize  }}>
      {children}
    </ThemeContext.Provider>
  );
}
