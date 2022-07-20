import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Firesms title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Firesms/i);
  expect(linkElement).toBeInTheDocument();
});
