import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import Register from "../register/register.jsx";
import PropTypes from "prop-types";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Login({ setAccessToken, setRefreshToken }) {
  // move to registration page
  const toReg = () => {
    var data = { accessToken: 1 };
    setAccessToken(data);
  };

  // logic for Login
  let onFinish = async (values) => {
    const request_url = "https://bradz-backend.glitch.me/login";
    const { username, password } = values;

    //axios request options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: API_KEY,
      },
      data: {
        username,
        password,
      },
      url: request_url,
    };

    //axios request
    const response = await axios(options)
      .then((response) => {
        if (response.status === 200) {
          console.log("login pass here");
          setAccessToken(response.data);
          setRefreshToken(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Your credentials are incorrect. Try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: 400 }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a onClick={toReg}>register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

Login.prototype = {
  setAccessToken: PropTypes.func.isRequired,
  setRefreshToken: PropTypes.func.isRequired,
};
