import { customRender, screen } from "@/test_utils/Test-utils";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import userEvent from "@testing-library/user-event";

jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDrgging: true }, null],
  useDrop: () => [{ isDroping: true }, null],
}));

describe("BookmarkList", () => {
  beforeEach(() => {
    customRender(<BookmarkList listId={100} listCategory="social media" />);
  });

  test("renders a Button with text 'add'", () => {
    const buttonElement = screen.getByRole("button", { name: "add" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders a header with text 'listCategory'", () => {
    const headerElement = screen.getByRole("heading", { name: "social media" });
    expect(headerElement).toBeInTheDocument();
  });

  test("renders a bookmark form after clicking on the add button", async () => {
    userEvent.setup();
    const buttonElement = screen.getByRole("button", { name: "add" });
    await userEvent.click(buttonElement);
    const formElement = screen.getByTestId("bookmark-form-test");

    expect(formElement).toBeInTheDocument();
  });
});
