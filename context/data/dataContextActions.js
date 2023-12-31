import { dataActionTypes } from "./actionsTypes";

export const dataActions = (dispatch) => ({
  addBookmark: (item) => {
    if (item.name === "" || item.url === "") return;
    dispatch({ type: dataActionTypes.ADD_BOOKMARK, payload: item });
  },

  deleteBookmark: (id) => {
    dispatch({ type: dataActionTypes.DELETE_BOOKMARK, payload: id });
  },

  updateBookmark: (newBookmark) => {
    dispatch({ type: dataActionTypes.UPDATE_BOOKMARK, payload: newBookmark });
  },

  moveBookmark: (id, listId) => {
    dispatch({ type: dataActionTypes.MOVE_BOOKMARK, payload: { id, listId } });
  },

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
