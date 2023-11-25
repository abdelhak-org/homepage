import React from "react";
import {useUiContext} from "../context/ui/UiContext"
const Footer = () => {
    const {uiData} = useUiContext()
return (
<div

className="max-width-[1534px] py-4  text-center  text-green-light bg-green ">
    Bookmarks Page 
</div>
);
};

export default Footer;
