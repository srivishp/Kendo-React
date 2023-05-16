import { render, screen } from "@testing-library/react";
import TransactionForm from "./TransactionForm";

//test block
test("Tests Transaction Form", () => {
  // render the component on virtual dom
  render(<TransactionForm />);

  //select the elements you want to interact with
  const guid = screen.getByTestId("GUID");
  const transactionName = screen.getByTestId("Transaction Name");
  const originator = screen.getByTestId("Originator");

  //assert the expected result
  expect(guid).toHaveTextContent("GUID");
  expect(transactionName).toHaveTextContent("Transaction Name");
  expect(originator).toHaveTextContent("Originator");

});