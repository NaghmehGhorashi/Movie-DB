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
    const response = await BaseUrl.get(`/discount?code=${code}`);
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
}
