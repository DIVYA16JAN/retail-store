import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const onSignOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo-image" />
        </Link>
        <div className="navlinks-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={onSignOutHandler}>
              SIGNOUT
            </span>
          ) : (
            <Link className="signIn-link" to="/auth">
              SIGNIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
