import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm  from '../../components/sign-up-form/sign-up-form.component';
import './authPage.styles.scss';

const AuthPage = () => {

    return (<div className="auth-page-container">
        <SignInForm/>
        <SignUpForm />
    </div>);
}

export default AuthPage;