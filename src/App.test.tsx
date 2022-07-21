import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders firesms app", () => {
  render(<App />);
  const title = screen.getByTitle(/Firesms/i);
  expect(title).toBeInTheDocument();
});
