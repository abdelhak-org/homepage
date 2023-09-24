import { dataActionTypes } from "./actionTypes";

export const dataActions = ( dispatch ) => ( {
  addBookmark: ( item ) => {
    if ( item.name === "" || item.url === "" ) return;
    dispatch( { type: dataActionTypes.ADD_BOOKMARK, payload: item } );
  },

  deleteBookmark: ( id ) => {
    dispatch( { type: dataActionTypes.DELETE_BOOKMARK, payload: id } );
  },

  moveBookmark: ( id, listId ) => {
    dispatch( { type: dataActionTypes.MOVE_BOOKMARK, payload: { id, listId } } );
  },

  addNewList: ( newList ) => {
    if ( newList.listName === "" ) return;
    dispatch( { type: dataActionTypes.ADD_NEW_LIST, payload: newList } )
  }


} )


export const deleteAction = ( id ) => ( { type: dataActionTypes.DELETE_BOOKMARK, payload: id } )
