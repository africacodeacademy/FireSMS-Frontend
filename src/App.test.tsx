import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders firesms app", () => {
  render(<App />);
  const title = screen.getAllByText(/FireSMS/i)[0] as HTMLAnchorElement;
  expect(title).toBeInTheDocument();
});
