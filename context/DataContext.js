import { createContext, useReducer } from "react";

// basic data

const dataList =[
  { listId :100 ,
    listName  :"browsers", 
  },
  { listId :101 ,
    listName  :" social Media", 
  },
  { listId :102 ,
    listName  :"Contact", 
  },

]
/// bookmarK list
const globalData= [
    {
      id: 1,
      listId :100 ,
      category: "browsers",
      name: "CHROME",
      url: "https://www.google.de/",
    },
    {
      id: 2,
      listId :100 ,
      category: "browsers",
      name: "FIREFOX",

      url: "https://www.google.de/",
    },
    {
      id: 3,
      listId :100 ,
      category: "browsers",
      name: "EXPLORER",
      url: "https://www.google.de/",
    },
    {
      id: 4,
      listId :100 ,
      category: "browsers",
      name: "EDGE",
      url: "https://www.google.de/",
    },

    {
      id: 5,
      listId :101 ,
      category: "social media",
      name: "FACEBOOK",
      url: "https://www.facebook.com/",
    },
    {
      id: 6,
      listId :101 ,
      category: "social media",
      name: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      id: 7,
      listId :101 ,
      category: "social media",
      name: "TIKTOK",
      url: "https://www.tiktok.com/explore",
    },
    {
      id: 8,
      listId :101 ,
      category: "social media",
      name: "WECHAT",
      url: "https://www.wechat.com/",
    },

    {
      id: 9,
      listId :102 ,
      category: "contact",
      name: "GMAIL",
      url: "https://mail.google.com/",
    },
    {
      id: 10,
      listId :102 ,
      category: "contact",
      name: "YAHOO",
      url: "https://www.yahoo.com/",
    },
    {
      id: 11,
      listId :102 ,
      category: "contact",
      name: "HOTMAIL",
      url: "https://www.microsoft.com/",
    },
    {
      id: 12,
      listId :102 ,
      category: "contact",
      name: "BING",
      url: "https://www.bing.com/",
    },
  ]


// Reducer Function
const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return { ...state, globalData: [...state.globalData, action.payload] };

    case "DELETE_BOOKMARK":
      return {
        ...state,
        globalData: state.globalData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "MOVE_BOOKMARK":
      return {
        ...state,
        globalData: state.globalData.map((bookmark) =>
          bookmark.id === action.payload.id
            ? { ...bookmark, listId: action.payload.listId }
            : bookmark
        ),
      };
      case "ADD_NEW_LIST" : 
      return {...state ,dataList:[...state.dataList , action.payload] }
    default:
      return state;
  }
};

// create Context
export const DataContext = createContext();

// create Provider
export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, {globalData,dataList });

  // function to ADD NEW ELEMENT
  const addBookmark = (item) => {
    if (item.name === "" || item.url === "") return;
    dispatch({ type: "ADD_BOOKMARK", payload: item });
  };

  // Function to Delet an Element
  const deleteBookmark = (id) => {
    dispatch({ type: "DELETE_BOOKMARK", payload: id });
  };
  // handling localStorage

  const moveBookmark = (id, listId) => {
    dispatch({ type: "MOVE_BOOKMARK", payload: { id, listId } });
  };
  /// create new list 
  const addNewList = (newList)=>{
    if (newList.listName === "") return;

    dispatch({type:"ADD_NEW_LIST" , payload : newList })
  }
  console.log("category =>" , state.dataList)
  console.log("data=>" , state.globalData)

  return (
    <DataContext.Provider
      value={{
        bookmarklist: state.globalData,
        categoryList : state.dataList, 
        addBookmark,
        deleteBookmark,
        moveBookmark,
        addNewList
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
