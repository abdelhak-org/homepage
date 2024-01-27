import { dataActionTypes } from "./actionsTypes";

export const dataActions = (dispatch) => ({
  addBookmark: (newItem ,selectedListId ) => {
    //if (item.name === "" || item.url === "") return;
    dispatch({ type: dataActionTypes.ADD_BOOKMARK, payload: { newItem ,selectedListId } });
  },

  deleteBookmark: (listId ,id) => {
    dispatch({ type: dataActionTypes.DELETE_BOOKMARK, payload: {listId ,id} });
  },

  updateBookmark: (listId,newBookmark) => {
    dispatch({ type: dataActionTypes.UPDATE_BOOKMARK, payload: {listId , newBookmark} });
  },

  moveBookmark: (item, listId) => {
    dispatch({ type: dataActionTypes.MOVE_BOOKMARK, payload: {item,  listId } });
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
  moveList: (listId, left, top) => {
    dispatch({
      type: dataActionTypes.MOVE_LIST,
      payload: { listId, top, left },
    });
  },
});

export const deleteAction = (id) => {
  dispatch({
    type: dataActionTypes.DELETE_BOOKMARK,
    payload: id,
  })
};
