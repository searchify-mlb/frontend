import { LoginFields } from "./types";

const BASE_API_URL = "https://mlb.timbangkit.cloud";

export const searchVideos = async (searchQuery: string) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/search/${encodeURIComponent(searchQuery)}`,
      {
        headers: {
          Authorization: `Bearer token`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Search videos failed");
  }
};

export const login = async (loginField: LoginFields) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginField),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Login failed");
  }
};
