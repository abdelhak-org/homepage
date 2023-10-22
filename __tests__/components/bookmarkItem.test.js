import BookmarkItem from "@/components/bookmarklist/BookmarkItem";
import { render, screen } from "@testing-library/react";

import TestUtils from "react-dom/test-utils";
import expect from "expect";
describe("BookmarkItem", () => {
  test("dnd", () => {
    const OriginalBox = BookmarkItem.DecoratedComponent;

    // Stub the React DnD connector functions with an identity function
    const identity = (el) => el;

    // Render with one set of props and test
    let root = TestUtils.renderIntoDocument(
      <OriginalBox name="Gamil" connectDragSource={identity} />
    );
    let link = TestUtils.findRenderedDOMComponentWithTag(root, "li");
    expect(link.props.style.opacity).toEqual(1);

    // Render with another set of props and test
    root = TestUtils.renderIntoDocument(
      <OriginalBox name="test" connectDragSource={identity} isDragging />
    );
    div = TestUtils.findRenderedDOMComponentWithTag(root, "div");
    expect(div.props.name).toMatch("Gmail");
  });
});
