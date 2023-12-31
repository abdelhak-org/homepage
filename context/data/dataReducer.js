import { bookmarksData, listsData } from "@/data/db";
import { dataActionTypes } from "./actionsTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case dataActionTypes.ADD_BOOKMARK:
      return {
        ...state,
        bookmarksData: [...state.bookmarksData, action.payload],
      };

    case dataActionTypes.DELETE_BOOKMARK:
      const filteredBookmarks = state.bookmarksData.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        bookmarksData: filteredBookmarks,
      };
    case dataActionTypes.MOVE_BOOKMARK:
      return {
        ...state,
        bookmarksData: state.bookmarksData.map((bookmark) =>
          bookmark.id === action.payload.id
            ? { ...bookmark, listId: action.payload.listId }
            : bookmark
        ),
      };
    case dataActionTypes.UPDATE_BOOKMARK:
      const newBookmark = action.payload;
      return {
        ...state,
          bookmarksData: state.bookmarksData.map((bookmark) =>
          bookmark.id === newBookmark.id ? newBookmark : bookmark
        ),
      };
    case dataActionTypes.ADD_NEW_LIST:
      return { ...state, listsData: [...state.listsData, action.payload] };
// delete a list
      case dataActionTypes.DELETE_LIST:
        return { ...state, listsData: state.listsData.filter((item)=> item.listId !== action.payload) };


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


    case dataActionTypes.MOVE_ITEM:
      return {
        ...state,
        bookmarksData: (dragIndex, hoverIndex) => {
          
            const draggedItem = state.bookmarksData[dragIndex];
            const updatedItems = [...state.bookmarksData];
            updatedItems.splice(dragIndex, 1);
            updatedItems.splice(hoverIndex, 0, draggedItem);
            return updatedItems;
          ;
        },
      };

    default:
      return state;
  }
};
