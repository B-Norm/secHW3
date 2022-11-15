import React from "react";
import useAccessToken from "../../components/useAccessToken";
import useRefreshToken from "../../components/useRefreshToken";
const API_KEY = import.meta.env.VITE_API_KEY;

import axios from "axios";
export default function dashboard() {
  const { accessToken, setAccessToken } = useAccessToken();
  const { refreshToken, setRefreshToken } = useRefreshToken();

  // refresh token
  let refresh = async (token) => {
    const request_url = "https://bradz-backend.glitch.me/token";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: API_KEY,
      },
      data: {
        token: refreshToken,
      },
      url: request_url,
    };

    const response = await axios(options)
      .then((response) => {
        if (response.status === 200) {
          setAccessToken(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // use token
  let doThing = async (token) => {
    const request_url = "https://bradz-backend.glitch.me/action";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + accessToken,
      },
      url: request_url,
    };

    const response = await axios(options)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>On the Dash</h1>
      <button onClick={doThing}>Do thing</button> or{" "}
      <a onClick={refresh}>Refresh Session token</a>
    </div>
  );
}
