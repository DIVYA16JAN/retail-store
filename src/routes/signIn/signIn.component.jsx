import { useEffect } from 'react';
import { signInWithGooglePopup, signInWithGoogleRedirect, auth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import {
    getRedirectResult
} from 'firebase/auth';

const SignIn = () => {
    useEffect(() => {
        const getRedirectUser = (async()=> {
            const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    });
     getRedirectUser();
    }, []);

const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
};

return (<div>
    <h1>Sign In</h1>
    <button onClick={signInGoogleUser}>sign in with google</button>
    <button onClick={signInWithGoogleRedirect}>sign in with google Redirect</button>
</div>);
}

export default SignIn;