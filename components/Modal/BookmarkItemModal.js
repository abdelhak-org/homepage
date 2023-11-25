"use client"
import {RiCloseCircleLine} from "react-icons/ri";

function BookmarkItemModal() {


    return (
        <div className="fixed  top-0 left-0 w-full h-full z-30 flex items-center justify-center bg-black">

            <div className="flex relative flex-col bg-x  gap-3 px-4 pt-2 pb-4 z-40 rounded-md">
                <div className="flex justify-between items-center  ">
                    <p className="text-sm block pt-1 font-bold">Edit Bookmark Modal</p>
                    <RiCloseCircleLine size={24}/>
                </div>

                <input type="text" placeholder="Name" className="rounded-md px-2 py-1"/>
                <input type="text" placeholder="Url" className="rounded-md px-2 py-1"/>
                <div className="flex justify-between gap-2">
                    <button className="grow bg-pink text-white text-sm p-2 rounded-md">Delete</button>
                    <button className="grow bg-green text-white text-sm p-2 rounded-md">Save</button>
                </div>
            </div>

        </div>
    )
}

export default BookmarkItemModal