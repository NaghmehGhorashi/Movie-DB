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
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("API Fetch Error:", error.message);
    }
  }
}

export async function MovieApi(id) {
  try {
    const response = await BaseUrl.get(`/movies2/${id}`);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("API Fetch Error:", error.message);
    }
  }
}

export async function checkDiscount({ code }) {
  try {
    const response = await BaseUrl.get(`/dis?code=${code}`);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("API Fetch Error:", error.message);
    }
  }
}

export async function userLogin({ username, password }) {
  const response = await BaseUrl({
    method: "post",
    url: "/login",
    data: { username, password },
  });
  return response;
}

export async function createProduct(params) {
  const response = await BaseUrl({
    method: "post",
    url: "/movies2",
    data: params,
  });
  return response;
}
