import { render, screen , cleanup } from "@testing-library/react";
import NavBar from "@/components/NavBar";

describe("Navbar", () => {
  afterAll(()=> cleanup())
  test("header renders correctly", () => {
    render(<NavBar />);
    const navbarHeading  = screen.getByRole("heading", { name: "HomePage" });
    expect(navbarHeading).toBeInTheDocument();
  });
  test("Navbar has three links", () => {
    render(<NavBar />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(3);
  });
});
