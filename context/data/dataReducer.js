import { dataActionTypes } from "./actionTypes";

export const dataReducer = ( state, action ) => {
    switch ( action.type ) {
        case dataActionTypes.ADD_BOOKMARK:
            return { ...state, bookmarksData: [...state.bookmarksData, action.payload] };

        case dataActionTypes.DELETE_BOOKMARK:
            const filteredBookmarks = state.bookmarksData.filter( ( item ) => item.id !== action.payload )
            return {
                ...state,
                bookmarksData: filteredBookmarks,
            };
        case dataActionTypes.MOVE_BOOKMARK:
            return {
                ...state,
                bookmarksData: state.bookmarksData.map( ( bookmark ) =>
                    bookmark.id === action.payload.id
                        ? { ...bookmark, listId: action.payload.listId }
                        : bookmark
                ),
            };
        case dataActionTypes.ADD_NEW_LIST:
            return { ...state, dataList: [...state.dataList, action.payload] }
        default:
            return state;
    }
};