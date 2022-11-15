// https://bradz-s3.glitch.me
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import PageRouter from "./components/router.jsx";
import useAccessToken from "./components/useAccessToken.jsx";
import useRefreshToken from "./components/useRefreshToken.jsx";

function App() {
  const { accessToken, setAccessToken } = useAccessToken();
  const { refreshToken, setRefreshToken } = useRefreshToken();

  // test if session has proper token
  // move to login screen if not
  if (accessToken == 1) {
    return <Register setAccessToken={setAccessToken} />;
  } else if (!accessToken || accessToken == 0) {
    return (
      <Login
        setAccessToken={setAccessToken}
        setRefreshToken={setRefreshToken}
      />
    );
  }

  return (
    <Router>
      <PageRouter />
    </Router>
  );
}

export default App;
