import { listsData } from "@/data/db";
import { dataActionTypes } from "./actionsTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {

    // ADDING NEW BOOKMARK 
    case dataActionTypes.ADD_BOOKMARK:
        try {
          const newBookmarkList = state.listsData.map((list )=>{
            if(list.listId === action.payload.selectedListId) {
              return {
                ...list, 
                items:
                [...list.items, action.payload.newItem]
              }
            }
            return list
         })
         return {
          ...state ,
          listsData:newBookmarkList ,
        };
        } catch (error) {
          console.log(error.message)
        }
    

    case dataActionTypes.DELETE_BOOKMARK:
      return {     
        ...state,
        listsData: state.listsData.map((list) => {
          if (list.listId === action.payload.listId) {
            return {
              ...list,
              items: list.items.filter((item) => item.id !== action.payload.id),
            }


            
          }
          return list;
        }),
      };

    // MOVE BOOKMARK accepting{ item , listId}

    case dataActionTypes.MOVE_BOOKMARK:
      const newDataList = state.listsData.map((list) => {
        if (list.listId === action.payload.listId) {
          const itemIndex = action.payload.item.index;
          const itemId = list.items[itemIndex].id;
      
          return {
            ...list,
            items: list.items.filter((item) => item.id !== itemId),
          };
        } else {
          return list;
        }
      });
      
      // newDataList contains the updated state
      
      return {
        ...state,
        listsData: state.listsData.map((list) =>
        list.listId === action.payload.listId
          ? { ...list, items: [...list.items, action.payload.item.item] }
          : list
      ),
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
         listsData: [...state.listsData, action.payload] };

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