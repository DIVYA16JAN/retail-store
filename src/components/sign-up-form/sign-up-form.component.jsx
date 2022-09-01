import { useState } from "react";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetDefaultValues = () => {
    setFormFields(defaultFields);
  };

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm passord doesnot matches, Try again.");
      return;
    }
    try {
      const response = await createAuthUserWithEmailPassword(email, password);
      createUserDocumentFromAuth(response.user, { displayName });
      resetDefaultValues();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User creation Failed, Email id already exist.");
      } else {
        console.log("error in creating user from email" + error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitSignUp}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onHandleChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onHandleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onHandleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
