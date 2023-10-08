import { render, screen } from "@testing-library/react";
import BookmarkForm from "@/components/BookmarkForm";
import { DataContextProvider } from "@/context/data/DataContext";

describe("BookmarkForm", () => {
  it("has label name 'Name'", () => {
    render(<BookmarkForm />, { wrapper: DataContextProvider });
    const labelElement = screen.queryByText(/name/i);
    expect(labelElement).not.toBeInTheDocument();
  });

  it("has Submit button ", () => {
    render(<BookmarkForm />, { wrapper: DataContextProvider });
    const buttonElement = screen.queryByRole("button");
    expect(buttonElement).not.toBeInTheDocument();
  });
});
