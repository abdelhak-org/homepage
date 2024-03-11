export const uiActions = (dispatch) => ({
    ChangeBgColor: (color) => {
        dispatch({type: "CHANGE_BG_COLOR", payload: color});
    },
    ChangeBookmarkColor: (color,listId) => {
        dispatch({type: "CHANGE_BOOKMARK_COLOR", payload: {color, listId}});
    },
    ChangeBookFontSize: (size) => {
        dispatch({type: "CHANGE_BOOKMARK_FONTSIZE", payload: size});
    },
    openModal: (id) => {
        dispatch({type: "OPEN_BOOKMARK_MODAL", payload: id});
    },
})