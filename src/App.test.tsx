import { render, screen } from "@testing-library/react";
import Layout from "./Components/Layout/Layout";

test("renders firesms app", () => {
  render(<Layout />);
  const title = screen.getAllByText(/FireSMS/i)[0] as HTMLAnchorElement;
  expect(title).toBeInTheDocument();
});
