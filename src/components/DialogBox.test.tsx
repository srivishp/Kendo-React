import { render, fireEvent, screen } from "@testing-library/react";
import DialogBox from "./DialogBox";

//test block
test("Tests Dialog Box", () => {
  // render the component on virtual dom
  render(<DialogBox />);

  //select the elements you want to interact with
  const button = screen.getByTestId("dialogButton");
  const content = screen.getByTestId("dialogContent");

//interact with those elements
fireEvent.click(button);

//assert the expected result
  
  expect(content).toHaveTextContent("This is the content of the dialog box.");

});
