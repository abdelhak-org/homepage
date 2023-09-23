import { useContext } from "react";
import { ThemeContext} from "../context/ThemeConext";


export  function useTheme(){
    const context = useContext(ThemeContext)
    return context
}
