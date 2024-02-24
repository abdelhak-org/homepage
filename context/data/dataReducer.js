import { dataActionTypes } from "./actionsTypes";
import { addBookmark, deleteBookmark, moveBookmark, updateBookmark } from "../utils/reducer-util";


/// Reducer
export const dataReducer = (state, action) => {
  switch (action.type) {
    case dataActionTypes.ADD_BOOKMARK:
      return addBookmark(state, action);

    case dataActionTypes.DELETE_BOOKMARK:
      return deleteBookmark(state, action);

    case dataActionTypes.MOVE_BOOKMARK:
      return moveBookmark(state, action);

    case dataActionTypes.UPDATE_BOOKMARK:
      return updateBookmark(state, action);

    case dataActionTypes.ADD_NEW_LIST:
      return addNewList(state, action);

    case dataActionTypes.DELETE_LIST:
      return {
        ...state,
        listsData: state.listsData.filter(
          (list) => list.listId !== action.payload
        ),
      };

    case dataActionTypes.SEARCH_BOOKMARK:
      const searchValue = action.payload;
      console.log("searchValue", searchValue);
      const newListData = state.listsData.map((list) => {
        const newBookmarks = list.items.filter((bookmark) => {
          return (
            bookmark.name.toLowerCase().includes(searchValue.toLowerCase())
            
          );
        });
        return {
          ...list,
          items: newBookmarks,
        };
      }
      );
      return {
        ...state,
        listsData: newListData.filter((list) => list.items.length > 0),
      };
    default:
      return state;
  }
};
