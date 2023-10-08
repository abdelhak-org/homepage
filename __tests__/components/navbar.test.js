import { render, screen } from "@testing-library/react";
import NavBar from "@/components/NavBar";
describe("Navbar", () => {
  test("header renders correctly", () => {
    render(<NavBar />);
    const navBarElement = screen.getByRole("heading", { name: "HomePage" });
    expect(navBarElement).toBeInTheDocument();
  });
  test("Navbar has three links", () => {
    render(<NavBar />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(3);
  });
 
});
