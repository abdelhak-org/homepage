import { listsData } from "@/data/db";
import { dataActionTypes } from "./actionsTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {
    // ADDING NEW BOOKMARK
    case dataActionTypes.ADD_BOOKMARK:
      try {
        const newBookmarkList = state.listsData.map((list) => {
          if (list.listId === action.payload.selectedListId) {
            return {
              ...list,
              items: [...list.items, action.payload.newItem],
            };
          }
          return list;
        });
        return {
          ...state,
          listsData: newBookmarkList,
        };
      } catch (error) {
        console.log(error.message);
      }

    case dataActionTypes.DELETE_BOOKMARK:
      return {
        ...state,
        listsData: state.listsData.map((list) => {
          if (list.listId === action.payload.listId) {
            return {
              ...list,
              items: list.items.filter((item) => item.id !== action.payload.id),
            };
          }
          return list;
        }),
      };

    // MOVE BOOKMARK accepting{ item , listId} {item:{index , item} , listId

    case dataActionTypes.MOVE_BOOKMARK:
          const sourceListId = action.payload.item.sourcelistId ;
          const targetListId = action.payload.targetListId ;
          const item = action.payload.item.item ;
          const targetIndex = action.payload.targetIndex ;
          const sourceIndex = action.payload.item.index ;
      // newDataList contains the updated state 
      const newListData = state.listsData.map((list) => {
        if (list.listId === sourceListId && sourceListId === targetListId) {
          return list;
        } else if (list.listId === sourceListId && sourceListId !== targetListId) {
          const updatedItems = list.items.filter((ele) => ele.id !== item.id);
          return {
            ...list,
            items: updatedItems,
          };
        } else if (list.listId === targetListId) {
          return {
            ...list,
            items: [...list.items, { ...item }],
          };
        } else {
          return list;
        }
      });
      
        return {
        ...state,
        listsData:newListData,
      };

    // update bookmark done
    case dataActionTypes.UPDATE_BOOKMARK:
      const updatedLists = state.listsData.map((list) => {
        if (list.listId === action.payload.listId) {
          return {
            ...list,
            items: list.items.map((item) =>
              item.id === action.payload.newBookmark.id
                ? action.payload.newBookmark
                : item
            ),
          };
        }
        return list;
      });

      return {
        ...state,
        listsData: updatedLists,
      };

    // adding a new list done

    case dataActionTypes.ADD_NEW_LIST:
      return {
        ...state,
        listsData: [...state.listsData, action.payload],
      };

    // delete a list done
    case dataActionTypes.DELETE_LIST:
      return {
        ...state,
        listsData: state.listsData.filter(
          (list) => list.listId !== action.payload
        ),
      };

    default:
      return state;
  }
};
