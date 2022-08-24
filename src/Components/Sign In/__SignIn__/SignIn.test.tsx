import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import SignINForm from "../signInform";

describe("Test SignIn component", () => {
  test("renders SignIn has 2 buttons", async () => {
    render(
      <Router>
        <SignINForm />
      </Router>,
    );
    const SignInbuttons = await screen.findAllByRole("button");
    expect(SignInbuttons).toHaveLength(2);
  });

  test("Check Email input and it should accept email", () => {
    render(
      <Router>
        <SignINForm />
      </Router>,
    );
    const EnteredEmail = screen.getByPlaceholderText("Email Address");
    expect(EnteredEmail).toHaveAttribute("type", "email");
  });

  test("password input is password", () => {
    render(
      <Router>
        <SignINForm />
      </Router>,
    );
    const EnteredPassword = screen.getByPlaceholderText("Password");
    expect(EnteredPassword).toHaveAttribute("type", "password");
  });

  test("On submition Loading is displayed", async () => {
    render(
      <Router>
        <SignINForm />
      </Router>,
    );

    const submitButton = screen.getByRole("button", {
      name: /Submit/i,
    });
    expect(submitButton).toBeInTheDocument();

    const PasswordInput = screen.getByPlaceholderText("Password");
    const EmailInput = screen.getByPlaceholderText("Email Address");
    userEvent.type(EmailInput, "molati@gmail.com");
    userEvent.type(PasswordInput, "57313255");

    userEvent.click(submitButton);
    await screen.findByText(/Submitting/i);
    expect("Submitting").toBeTruthy();
  });
});
