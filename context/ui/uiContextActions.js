export const uiActions = ( dispatch ) => ( {
    ChangeBgColor: ( color ) => {
        dispatch( { type: "CHANGE_COLOR", payload: color } );
        console.log( '[UI Actions]: color -> ', color );
    },
    ChangeBookmarkColor: ( color ) => {
        dispatch( { type: "CHANGE_BOOKMARK_COLOR", payload: color } );
    },
    ChangeBookFontSize: ( size ) => {
        dispatch( { type: "CHANGE_BOOKMARK_FONTSIZE", payload: size } );
    },
} )

