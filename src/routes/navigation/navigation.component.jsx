import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-container'>
                <Link className="logo-container" to="/">
                    <CrownLogo className='logo-image' />
                </Link>
                <div className='navlinks-container'>
                    <Link className='nav-link' to="/shop">SHOP</Link>
                    <Link className="signIn-link" to="/auth">SIGNIN</Link>
                </div>
            </div >
            <Outlet />
        </Fragment>
    );
}

export default Navigation;