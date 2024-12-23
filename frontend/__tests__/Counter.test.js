// src/__tests__/Counter.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("it should render the Counter component and handle click events", () => {
  render(<Counter />);

  // Check if the initial count is displayed as 0
  const countElement = screen.getByText(/Count:/i);
  expect(countElement).toHaveTextContent("Count: 0");

  // Click on the increment button and verify the count
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("Count: 1");

  // Click on the decrement button and verify the count
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("Count: 0");
});
