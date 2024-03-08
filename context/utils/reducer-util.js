export const addBookmark = (state, action) => {
    const newBookmarkList = state.listsData.map((list) => {
        if (list.listId === action.payload.selectedListId) {
            return {
                ...list,
                items: [...list.items, action.payload.newItem],
            };
        }
        return list;
    });

    return {
        ...state,
        listsData: newBookmarkList,
    };
};

export const addNewList = (state, action) => {
    return {
        ...state,
        listsData: [...state.listsData, action.payload],
    };
};

export const deleteBookmark = (state, action) => {
    return {
        ...state,
        listsData: state.listsData.map((list) => {
            if (list.listId === action.payload.listId) {
                return {
                    ...list,
                    items: list.items.filter((item) => item.id !== action.payload.id),
                };
            }
            return list;
        }),
    };
};

export const moveBookmark = (state, action) => {
    const sourceListId = action.payload.item.sourcelistId;
    const targetListId = action.payload.targetListId;
    const item = action.payload.item.item;
    const targetIndex = action.payload.targetIndex;
    const sourceIndex = action.payload.item.index;

    const newList = state.listsData.map((list) => {
        if (sourceListId === targetListId && list.listId === sourceListId) {
            if (sourceIndex === targetIndex) return list;
            const newItems = [...list.items];
            const tempItem = newItems[targetIndex];
            newItems.splice(targetIndex, 1, item);
            newItems.splice(sourceIndex, 1, tempItem);
            return {
                ...list,
                items: newItems,
            };
        }
        if (sourceListId !== targetListId) {
            if (list.listId === sourceListId) {
                return {
                    ...list,
                    items: list.items.filter((ele) => ele.id !== item.id),
                };
            }
            if (list.listId !== sourceListId && list.listId === targetListId) {
                const newItemList = [...list.items];
                const targetItem = newItemList[targetIndex];
                newItemList.splice(targetIndex, 0, item);
                return {
                    ...list,
                    items: newItemList,
                };
            }
        }
        return list;
    });

    return {
        ...state,
        listsData: newList,
    };
};

export const updateBookmark = (state, action) => {
    const updatedLists = state.listsData.map((list) => {
        if (list.listId === action.payload.listId) {
            return {
                ...list,
                items: list.items.map((item) =>
                    item.id === action.payload.newBookmark.id
                        ? action.payload.newBookmark
                        : item
                ),
            };
        }
        return list;
    });

    return {
        ...state,
        listsData: updatedLists,
    };
};


export const searchBookmark = (state, action)=>{
    
    const newListData = state.listsData.map((list)=> {
        return {
          ...list, 
          items: list.items.filter((item)=> item.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
      
      } )
  
    return {
      ...state,
      searchValue :action.payload,
      listsData: newListData,
    }
    
  }