import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import PageRouter from "./components/router.jsx";

function App() {
  const [token, setToken] = useState();

  // test if session has proper token
  // move to login screen if not
  if (token == 1) {
    return <Register setToken={setToken} />;
  } else if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <PageRouter />
    </Router>
  );
}

export default App;
