import { listsData } from "@/data/db";
import { dataActionTypes } from "./actionsTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case dataActionTypes.ADD_BOOKMARK:
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

    case dataActionTypes.MOVE_BOOKMARK:
      const sourceListId = action.payload.item.sourcelistId;
      const targetListId = action.payload.targetListId;
      const item = action.payload.item.item;
      const targetIndex = action.payload.targetIndex;
      const sourceIndex = action.payload.item.index;

      const newList = state.listsData.map((list) => {
        if (sourceListId === targetListId && list.listId === sourceListId) {
          if (sourceIndex === targetIndex) return list;
          const newItems = [...list.items];
          const x = newItems[targetIndex];
          newItems.splice(targetIndex, 1, item);
          newItems.splice(sourceIndex, 1, x);
          return {
            ...list,
            items: newItems,
          };
        }
        if (sourceListId !== targetListId) {
          if (list.listId === sourceListId) {
            return {
              ...list,
              items: list.items.filter((ele) => ele.id !== item.id),
            };
          }
          if (list.listId !== sourceListId && list.listId === targetListId) {
            const newItemList = [...list.items];
            const targetItem = newItemList[targetIndex];
            newItemList.splice(targetIndex, 0, item);
            return {
              ...list,
              items: newItemList,
            };
          }
        }
        return list;
      });

      return {
        ...state,
        listsData: newList,
      };

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

    case dataActionTypes.ADD_NEW_LIST:
      return {
        ...state,
        listsData: [...state.listsData, action.payload],
      };

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
