import {listsData } from "@/data/db";
import { dataActionTypes } from "./actionsTypes";

export const dataReducer = (state, action) => {

  switch (action.type) {

    case dataActionTypes.ADD_BOOKMARK:
          
      return {
        ...state,
    
      };

    case dataActionTypes.DELETE_BOOKMARK:
      const updateDeleteList = [...state.listsData] ;
      
      const filteredBookmarksList = updateDeleteList.find((list)=> list.listId === action.payload.listId);
      console.log(filteredBookmarksList,"..............")
      filteredBookmarksList.items = filteredBookmarksList.items.filter((item)=>item.id!==action.payload.id)
      console.log(updateDeleteList,">>>>>>>>>>>>>>>>>>>>>")

      return {
        ...state,
        listsData:updateDeleteList,
      };

      // MOVE BOOKMARK
    case dataActionTypes.MOVE_BOOKMARK:
      const listIndex = listsData.findIndex(
        (list) => list.listId === action.payload.listId
      );
     
      const updatedListsData = [...state.listsData];
      updatedListsData[listIndex].items = [...updatedListsData[listIndex].items , action.payload.newItem];
      return {
        ...state,
        listsData: updatedListsData    ,
      };

    
     // update bookmark
     case dataActionTypes.UPDATE_BOOKMARK:
        const updateList = [...state.listsData]
      const newList= 
        updateList.find((list)=> list.listId === action.payload.listId).items.
        map((item)=> item.id === action.payload.newBookmark.id ? action.payload.newBookmark:item)
     
      return {
        ...state,
        listsData: newList,
      };
    
      // adding a new list
    case dataActionTypes.ADD_NEW_LIST:
      return { ...state, listsData: [...state.listsData, action.payload] };
  
    // delete a list
    case dataActionTypes.DELETE_LIST:
      return {
        ...state,
        listsData: state.listsData.filter(
          (item) => item.listId !== action.payload
        ),
      };
    
    ///
    case dataActionTypes.MOVE_LIST:
      return {
        ...state,
        listsData: state.listsData.map((list) => {
          console.log("[data reducer map] => ", list.listId, action.payload);
          return list.listId === action.payload.listId
            ? { ...list, top: action.payload.top, left: action.payload.left }
            : list;
        }),
      };

    default:
      return state;
  }
};

