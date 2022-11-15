import { useState } from "react";

export default function useRefreshToken() {
  const getRefreshToken = () => {
    const tokenString = sessionStorage.getItem("refreshToken");
    const userRefreshToken = JSON.parse(tokenString);
    return userRefreshToken?.refreshToken;
  };

  const [refreshToken, setRefreshToken] = useState(getRefreshToken());

  const saveRefreshToken = (userRefreshToken) => {
    sessionStorage.setItem("refreshToken", JSON.stringify(userRefreshToken));
    setRefreshToken(userRefreshToken.refreshToken);
  };

  return {
    setRefreshToken: saveRefreshToken,
    refreshToken,
  };
}
