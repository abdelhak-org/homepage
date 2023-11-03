import { customRender, screen } from "@/test_utils/Test-utils";
import BookmarkList from "@/components/bookmarklist/BookmarkList";

import userEvent from "@testing-library/user-event";
jest.mock("react-dnd", () => {
  return {
    useDrag: () => [{ isDrgging: true }, null],
    useDrop: () => [{ isDroping: true }, null],
  };
});

describe("BookmarkList", () => {
  test("it render a Button  with test add  ", () => {
    customRender(<BookmarkList listId={100} listCategory="social media" />);
    const buttonElement = screen.getByRole("button", { name: "add" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("it render a header   with text listCategory  ", () => {
    customRender(<BookmarkList listId={100} listCategory="social media" />);
    const headerElement = screen.getByRole("heading", { name: "social media" });
    expect(headerElement).toBeInTheDocument();
  });

  test("it render a bookmarkform after click on add button ",async () => {
    userEvent.setup()
    customRender(<BookmarkList listId={100} listCategory="social media" />);
    const buttonElement = screen.getByRole("button", { name: "add" });
    await userEvent.click(buttonElement);
    const formElement = screen.getByTestId("bookmark-form-test");

    expect(formElement).toBeInTheDocument();
  });
  

});
