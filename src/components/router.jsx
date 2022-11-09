import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Dashboard from "../pages/dashboard/dashboard.jsx";

export default () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);
