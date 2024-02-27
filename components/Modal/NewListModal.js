import { Fragment, useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDataContext } from "@/context/data/DataContext";
import { MdPostAdd, MdDelete, MdOutlineClose } from "react-icons/md";
import useOnClickOutside from "@/hooks/useClickOutside";

export default function NewListModal({ setShowModal }) {
  const { listsData, dataActions } = useDataContext();
  const [selected, setSelected] = useState(listsData[0]?.listId);

  const [newBookmarkList, setNewBookmarkList] = useState({
    listId: Math.random() * 1000,
    listName: "",
    items: [],
  });
  const ref = useRef();
  useOnClickOutside(ref, () => setShowModal(false));

  const deleteHandle = () => {
    if (!selected) return;
    dataActions.deleteList(selected);
    setShowModal(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dataActions.addNewList(newBookmarkList);
    setNewBookmarkList({
      listId: Math.random() * 1000,
      listName: "",
      items: [],
    });
    setShowModal(false);
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 right-0 flex justify-center items-center 
     bg-[#333333bf]  z-50"
    >
      <div  className="w-[660px]  bg-white  rounded-md flex flex-col justify-between p-4 ">
        <div className="flex justify-between     text-gray-900 ">
          <h6 className="text-md">Add a List </h6>
          <MdOutlineClose
            onClick={() => setShowModal(false)}
            className="cursor-pointer "
            size={22}
          />
        </div>
        <div ref={ref} className="">
          <Listbox
            value={selected}
            onChange={setSelected}
            className="border rounded-md border-gray-200  "
          >
            <div className="relative mt-4 ">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 px-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-md">
                <span className="block truncate capitalize">
                  {listsData[0]?.listName}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md 
                 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                  {listsData.map((list, listIndex) => (
                    <Listbox.Option
                      key={listIndex}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={list.listId}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {list.listName}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <div className="w-full  bg-white mt-1 rounded-md">
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              show={true}
            >
              <input
                onChange={(e) =>
                  setNewBookmarkList({
                    ...newBookmarkList,
                    listName: e.target.value,
                  })
                }
                placeholder="add new list"
                value={newBookmarkList.listName}
                type="text"
                className="w-full   rounded-md px-2 text-md py-2   capitalize outline-0 my-2
                border border-spacing-2 border-gray-200 
                "
              />
            </Transition>
          </div>

          
        </div>
        <div
            className="flex justify-end space-x-2   py-2 my-0    "
          >
            <button
              onClick={deleteHandle}
              className="px-4 py-2 rounded-l-md bg-gray-100  text-gray-900  text-sm "
            > 
              Delete 
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-l-md bg-gray-100  text-gray-900  text-sm"
            >
              Save
            </button>
          </div>


      </div>
     
    </div>
  );
}
