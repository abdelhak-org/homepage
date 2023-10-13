import { customRender, screen} from "../../test_utils/Test-utils";
import Mode from "@/components/Mode";
//import userEvent from "@testing-library/user-event";
describe("ModeComponent", () => {
      
    test("modeConainer Renders Correctly", () => {
      customRender(<Mode />);
      const Container = screen.getByTestId("mode_container");
      expect(Container).toBeInTheDocument();
    });
    
    test("renders four buttons ", () => {
      customRender(<Mode  />);
      const buttonElements = screen.getAllByRole("button");
      expect(buttonElements).toHaveLength(4);
    });
    
})