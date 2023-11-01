import { customRender, screen } from "../../test_utils/Test-utils";
import BookmarkItem from "@/components/bookmarklist/BookmarkItem";
//import TestUtils from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
jest.mock("react-dnd", () => {
  return {
    useDrag: () => [{ isDrgging: true }, null],
  };
});
describe("BookmarkItem", () => {
  test("item render props.name ", () => {
    customRender(
      <BookmarkItem
        name="gmail"
        id="1"
        isAdded={true}
        setIsAdded={jest.fn()}
        listId={100}
      />
    );
    const linkElement = screen.getByTestId("bookmark-item-test");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("gmail");;
  });
  
  test("it render span with textContent x" ,()=>{
    customRender(<BookmarkItem  name="gmail"
    id="1"
    isAdded={true}
    setIsAdded={jest.fn()}
    listId={100}/>);
    expect(screen.getByTestId('bookmark-item-span-test')).toBeInTheDocument();
  }) ;
  
});
