import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailPassword,
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultFields);
  const { email, password } = signInFields;

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setSignInFields({ ...signInFields, [name]: value });
  };

  const onFormSubmit = (async(event) => {
    event.preventDefault();
    try{
        const response = await signInUserWithEmailPassword(email, password);
        console.log(response);
        resetFormFields();
    }catch(error){
        const errorCode = error.code;
        switch(errorCode){
            case 'auth/wrong-password':
                alert('Incorrect password for email.');
                break;
            case 'auth/user-not-found':
                alert('No user associated with this email.');
                break;
            default:
                console.log(error);
        }
    }
  });

  const resetFormFields =()=>{
    setSignInFields(defaultFields);
  };

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
