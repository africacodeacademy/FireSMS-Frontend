import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "../signUpForm";

describe("Test SignUp component", () => {
  test("renders SignUp has 2 buttons", async () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const SignUpButtons = await screen.findAllByRole("button");
    expect(SignUpButtons).toHaveLength(2);
  });

  test("Check Email input and it should accept email", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredEmail = screen.getByPlaceholderText("Email Address");
    expect(EnteredEmail).toHaveAttribute("type", "email");
  });

  test("Check Phone input and it should accept Telephone", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredPhoneNumber = screen.getByPlaceholderText("Phone Number");
    expect(EnteredPhoneNumber).toHaveAttribute("type", "telephone");
  });

  test("password input is password", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredPassword = screen.getByPlaceholderText("Password");
    expect(EnteredPassword).toHaveAttribute("type", "password");
  });

  test("On submition Loading is displayed", async () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );

    const CreateAccounButton = screen.getByRole("button", {
      name: /Create Account/i,
    });
    expect(CreateAccounButton).toBeInTheDocument();

    const PasswordInput = screen.getByPlaceholderText("Password");
    const PhoneNumberInput = screen.getByPlaceholderText("Phone Number");
    const EmailInput = screen.getByPlaceholderText("Email Address");
    userEvent.type(EmailInput, "molati@gmail.com");
    userEvent.type(PhoneNumberInput, "595959597");
    userEvent.type(PasswordInput, "57313255");

    userEvent.click(CreateAccounButton);
    await screen.findByText(/Creating Account/i);
    expect("Creating Account").toBeTruthy();
  });
});
