export const uiActions = (dispatch) => ({
    ChangeBgColor: (color) => {
        dispatch({type: "CHANGE_BG_COLOR", payload: color});
        console.log('[UI Actions]: bgColor -> ', color);
    },
    ChangeBookmarkColor: (color) => {
        dispatch({type: "CHANGE_BOOKMARK_COLOR", payload: color});
    },
    ChangeBookFontSize: (size) => {
        dispatch({type: "CHANGE_BOOKMARK_FONTSIZE", payload: size});
    },
    openModal: (id) => {
        dispatch({type: "OPEN_BOOKMARK_MODAL", payload: id});
    },
})