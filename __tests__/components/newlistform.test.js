import { customRender , screen } from "@/test_utils/Test-utils";
import NewListForm from "@/components/NewListForm";
import { useDataContext } from "@/context/data/DataContext";
describe("NewListForm Component" , ()=>{

 test("NewListForm  renders in The Document ", ()=>{
    customRender(<NewListForm showListForm= {true}  setShowListForm={jest.fn()} /> )
   const formElement = screen.getByTestId('formlist-testid');
   expect(formElement).toBeInTheDocument() ;
 })

test("it renders label 'Name '" ,()=>{
  customRender(<NewListForm showListForm= {true}  setShowListForm={jest.fn()} />)
  const labelName = screen.getByLabelText('Name');
  expect(labelName).toBeInTheDocument();
  
})
})