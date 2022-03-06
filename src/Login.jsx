import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "731116653639-bg5ceb8vvpo9p115906gq3c07pujd3nq.apps.googleusercontent.com";

export default function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [user, setUser] = useState({});

  const onLoginSuccess = (res) => {
    setUser(res.profileObj);

    setShowloginButton(false);
    setShowlogoutButton(true);
  };
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setUser({});
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}    
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />

      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
      ></GoogleLogout>

      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={user.imageUrl} alt="" />
    </div>
  );
}
