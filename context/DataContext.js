import { createContext, useReducer } from "react";

// basic data
const initialState = {
  GlobalData: [
    { id: 1, category: "browsers", name: "CHROME", deleted: false , url:"https://www.google.de/" },
    { id: 2, category: "browsers", name: "FIREFOX", deleted: false  , url:"https://www.google.de/"},
    { id: 3, category: "browsers", name: "EXPLORER", deleted: false  , url:"https://www.google.de/"},
    { id: 4, category: "browsers", name: "EDGE", deleted: false , url:"https://www.google.de/" },

    { id: 5, category: "social media", name: "FACEBOOK", deleted: false , url:"https://www.facebook.com/" },
    { id: 6, category: "social media", name: "instagram", deleted: false , url:"https://www.instagram.com/" },
    { id: 7, category: "social media", name: "TIKTOK", deleted: false  , url:"https://www.tiktok.com/explore"},
    { id: 8, category: "social media", name: "WECHAT", deleted: false  , url:"https://www.wechat.com/"},

    { id: 9, category: "contact", name: "GMAIL", deleted: false  , url:"https://mail.google.com/"},
    { id: 10, category: "contact", name: "YAHOO", deleted: false  , url:"https://www.yahoo.com/"},
    { id: 11, category: "contact", name: "HOTMAIL", deleted: false  , url:"https://www.microsoft.com/"},
    { id: 12, category: "contact", name: "BING", deleted: false , url:"https://www.bing.com/" },
  ],
};

// Reducer Function
const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return { ...state, GlobalData: [...state.GlobalData, action.payload] };

    case "DELETE_BOOKMARK":
      return {
        ...state,
        GlobalData: state.GlobalData.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

// create Context
export const DataContext = createContext();

// create Provider
export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  // function to ADD NEW ELEMENT
  const addBookmark = (item) => {
    if(item.name ==="" || item.url ==="")return;
    dispatch({ type:"ADD_BOOKMARK", payload:item });

  };

  // Function to Delet an Element
  const deleteBookmark = (id) => {
    dispatch({ type: "DELETE_BOOKMARK", payload: id });
  };
  // handling localStorage 
  
 
  return (
    <DataContext.Provider
      value={{ bookmarklist: state.GlobalData, addBookmark, deleteBookmark }}
    >
      {children}
    </DataContext.Provider>
  );
}
