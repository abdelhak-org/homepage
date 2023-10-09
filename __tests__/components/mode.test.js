import   {customRender} from  "../../test_utils/Test-utils";
import { fireEvent, screen } from "@testing-library/react";
import Mode from "@/components/Mode";
import userEvent from "@testing-library/user-event";
describe("ModeComponent" , ()=>{
    userEvent.setup()
    test("modeConainer Renders Correctly" , ()=>{
        customRender(<Mode/>)
        const Container = screen.getByTestId("mode_container") ;
        expect(Container).toBeInTheDocument();
        
    })
    
    
    test("renders four elements ", () => { 
        customRender(<Mode/>);
      const myElement =  screen.getAllByRole("button");
      expect(myElement).toHaveLength(4);
    });
    

})

