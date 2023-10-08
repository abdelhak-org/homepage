import { render } from "../../test_utils/Test-utils"; 
import Mode from "@/components/Mode";
describe("Mode" , ()=>{
   it("exist in the Document" , ()=>{
    render(<Mode/>)
    const modeElement = getByRole("mode");
    expect(modeElement).toBeInTheDocument() ;
   })
})