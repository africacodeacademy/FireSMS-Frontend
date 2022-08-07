import { render, screen } from "@testing-library/react";
import Footer from "./Components/Footer/footer";

test("renders firesms Footer", () => {
  render(<Footer />);
  const title = screen.getAllByText(/FireSMS/i)[0] as HTMLAnchorElement;
  expect(title).toBeInTheDocument();
});
