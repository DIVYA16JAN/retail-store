import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const signInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (<div>
        <h1>Sign In</h1>
        <button onClick={signInGoogleUser}>sign in with google</button>
    </div>);
}

export default SignIn;