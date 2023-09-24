import React from 'react'

export default function OptionsMenu() {
    const [isOpen, setIsOpen] = useState( false );
    return (
        <div className=" absolute w-16 h-full top-0 pt-8  right-0 bg-yellow-200">
            <label>
                <select
                    onChange={( e ) => uiActions.ChangeBookmarkColor( e.target.value )}
                    className="w-full cursor-pointer outline-none"
                >
                    <option value="">Color</option>

                    <option value={"#333"} className="bg-[#333]"></option>
                    <option value={"#fff"} className="bg-white">
                    </option>
                    <option value={"#071952"} className="bg-[#071952]"></option>
                    <option value={"#004225"} className=" bg-[#004225]"> </option>
                </select>
            </label>

            <label>
                <select
                    onChange={( e ) => uiActions.ChangeBookFontSize( e.target.value )}
                    className="w-full cursor-pointer outline-none"
                >
                    <option value="">Size</option>
                    <option value={"8px"}>sm</option>
                    <option value={"14px"}>lg</option>
                    <option value={"18px"}>xl</option>
                </select>
            </label>
        </div>
    )
}
