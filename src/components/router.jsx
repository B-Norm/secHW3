import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "../pages/login/login";
import Register from "../pages/login/register";



export default () => (
    
      <Routes>
        <Route path="/" element ={<Login />}/>
        
        <Route path="/register" element= {<Register />} />
      </Routes>
    
);
