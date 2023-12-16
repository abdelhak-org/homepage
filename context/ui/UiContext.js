import {createContext, useReducer, useContext, useMemo} from "react";
import {uiActions} from "./uiContextActions";

const uiReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_BG_COLOR":
            return {...state, bgColor: action.payload};
        case "CHANGE_BOOKMARK_COLOR":
            return {...state, bookmarkHeaderColor: action.payload};
        case "CHANGE_BOOKMARK_FONTSIZE":
            return {...state, fontS: action.payload};
        case "OPEN_BOOKMARK_MODAL":
            return {...state, modal: {name: MODALS.BOOKMARK, id: action.payload}};
        default:
            return state;
    }
};
export const UiContext = createContext();

const MODALS = {
    BOOKMARK: "BOOKMARK"
}

export function UiProvider({children}) {
    const [state, dispatch] = useReducer(uiReducer, {
        bgColor: "#fff",
        bookmarkHeaderColor: "#eee",
        textColor: "#fff",
        fontS: null,
        modal: {
            name: "",
            id: undefined
        }
    });
    const value = {
        uiData: {...state},
        actions: uiActions(dispatch),
    };

    return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export const useUiContext = () => useContext(UiContext);
