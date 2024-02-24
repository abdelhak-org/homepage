import { customRender, screen } from "../../test_utils/Test-utils";
import BookmarkItem from "@/components/bookmarklist/BookmarkItem";
import userEvent from "@testing-library/user-event";

jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDrgging: true }, null],
}));

describe("BookmarkItem", () => {
  test("renders item with props.name", () => {
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
    expect(linkElement).toHaveTextContent("gmail");
  });

  test("renders span with textContent 'x'", () => {
    customRender(
      <BookmarkItem
        name="gmail"
        id="1"
        isAdded={true}
        setIsAdded={jest.fn()}
        listId={100}
      />
    );
    expect(screen.getByTestId("bookmark-item-span-test")).toBeInTheDocument();
  });
});
