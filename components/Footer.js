    import React from "react";
    import { useUiContext } from "../context/ui/UiContext";
    const Footer = () => {
    const { uiData } = useUiContext();
    return (
        <footer className="w-screen  bg-neutral-800 ">
        <div className=" max-w-[1534px] mx-auto   flex flex-col  flex-wrap px-5 py-12 
        text-white  md:items-center lg:items-start
        md:flex-row md:flex-no-wrap">

            <div className="flex-shrink-0 w-64  mx-auto text-center md:mx-0 md:text-left">
            <a
                className="flex items-center capitalize font-script
                        justify-center text-2xl font-bold  title-font md:justify-start"
            >
                HomePage
            </a>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                About
                </h2>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                Support
                </h2>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                Platform
                </h2>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                Contact
                </h2>
            </div>
            </div>

        </div>

        <div className="bg-neutral-200">
            <div className=" px-5 py-6 ">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2023 All rights reserved{" "}
            </p>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;
