import {screen , render} from "@testing-library/react";
import NewListForm from "@/components/NewListForm";
import { useDataContext } from "@/context/data/DataContext";
import userEvent from "@testing-library/user-event";
describe("NewListForm Component" , ()=>{

 test("NewListForm does not renders in The Document", ()=>{
    render(<NewListForm />, {wrapper:useDataContext} )
   const formElement = screen.queryByRole("form");
   expect(formElement).not.toBeInTheDocument() ;
 })
 test("button does not renders in The Document", ()=>{
    render(<NewListForm />, {wrapper:useDataContext} )
   const buttonElement = screen.queryByRole("button");
   expect(buttonElement).not.toBeInTheDocument() ;
 })




})