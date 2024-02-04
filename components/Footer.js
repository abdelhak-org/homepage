import React from "react";
import {useUiContext} from "../context/ui/UiContext"
const Footer = () => {
    const {uiData} = useUiContext()
return (
  
   
    
        <footer className="w-full text-[#374151] bg-[#f3f4f6] body-font">
            <div
                className="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <a className="flex items-center capitalize font-script
                     justify-center text-2xl font-bold text-[#333] title-font md:justify-start">
                       HomePage
                    </a>
                  
                </div>
                <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                        
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                       
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                        </h2>
                     
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                      
                    </div>
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved </p>
                </div>
            </div>
        </footer>
    
);
};

export default Footer;
