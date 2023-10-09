import {  getByTestId, screen } from "@testing-library/react";
import OptionsMenu from "@/components/bookmarklist/OptionsMenu";
import   {customRender} from  "../../test_utils/Test-utils";
import userEvent from "@testing-library/user-event";
describe("menu", () => {

  test("a", () => {
    customRender(<OptionsMenu />);
    const selectElements = screen.queryByRole("combobox" );
    expect(selectElements).not.toBeInTheDocument();
  });

   test("onclick appears options" ,async ()=>{
    userEvent.setup()
    customRender(<OptionsMenu/>)
    const settingIcon = screen.getByRole("button")
    expect(settingIcon).toBeInTheDocument();
    await userEvent.click(settingIcon);
    const selectElements = screen.getAllByRole("combobox" );

    expect(selectElements).toHaveLength(2)
    
   })



});
