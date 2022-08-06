import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders firesms app", () => {
  render(<App />);
  const title = screen.getByText(/FireSMS/i);
  expect(title).toBeInTheDocument();
});
