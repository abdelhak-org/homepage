import { dataActionTypes } from "./actionsTypes";

export const dataActions = (dispatch) => ({
  addBookmark: (selectedListId  ,newItem ) => {
   // if (item.name === "" || item.url === "") return;
    dispatch({ type: dataActionTypes.ADD_BOOKMARK, payload: { selectedListId , newItem  } });
  },
  
  deleteBookmark: (listId ,id) => {
    dispatch({ type: dataActionTypes.DELETE_BOOKMARK, payload: {listId ,id} });
  },
  
  updateBookmark: (listId,newBookmark) => {
    dispatch({ type: dataActionTypes.UPDATE_BOOKMARK, payload: {listId , newBookmark} });
  },
  
  moveBookmark: (item , targetListId , targetIndex) => {
    dispatch({ type: dataActionTypes.MOVE_BOOKMARK, payload: {item, targetListId , targetIndex } });
  },
  moveCard :(fromIndex, toIndex)=>{
      dispatch({ type:dataActionTypes.MOVE_CARD , payload:{fromIndex, toIndex}})
  } ,
  addNewList: (newList) => {
    if (newList.listName === "") return;
    dispatch({ type: dataActionTypes.ADD_NEW_LIST, payload: newList });
  },
  
  deleteList: (listId) => {
  
    dispatch({ type: dataActionTypes.DELETE_LIST, payload: listId});
  },
  
  moveItem:(dragIndex , hoverIndex)=>{
    dispatch({ type: dataActionTypes.MOVE_ITEM ,payload:{dragIndex , hoverIndex} });
  
  }
  ,
  findBookmark: (searchValue) => {
    dispatch({
      type: dataActionTypes.SEARCH_BOOKMARK,
      payload: searchValue,
    });
  },

  resetUi : (searchValue)=>{
    dispatch({
      type: dataActionTypes.RESET_UI,
      payload:searchValue,
    });
  }
});


export const deleteAction = (id) => {
  dispatch({
    type: dataActionTypes.DELETE_BOOKMARK,
    payload: id,
  })
};
