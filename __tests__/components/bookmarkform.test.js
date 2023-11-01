import { customRender, screen } from  "../../test_utils/Test-utils";
import BookmarkForm from "@/components/BookmarkForm";
import { DataContextProvider } from "@/context/data/DataContext";

describe("BookmarkForm", () => {
  it("has label name 'Name'", () => {
    customRender(<BookmarkForm  listId={100} setShowForm={true}/>);
    
  });

  it("renders Submit button ", () => {
         customRender(<BookmarkForm  listId={100} />,);
          const formElement = screen.getByTestId("bookmark-form-test") ;
          expect(formElement).toBeInTheDocument()
  });
   
});
