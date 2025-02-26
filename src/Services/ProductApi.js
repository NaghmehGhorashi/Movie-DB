/* eslint-disable no-unused-vars */
import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://aryafuture.ir",
});

export async function MoviesApi() {
  try {
    const response = await BaseUrl.get("/movies2");
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
}

export async function MovieApi(id) {
  try {
    const response = await BaseUrl.get(`/movies2/${id}`);
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
}

export async function checkDiscount({ code }) {
  try {
    const response = await BaseUrl.get(`/dis?code=${code}`);
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
}

export async function userLogin({ username, password }) {
  const response = await BaseUrl({
    method: "post",
    url: "/login",
    data: { username, password },
  });
}
