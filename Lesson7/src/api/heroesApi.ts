import axios from "axios";
import { ApiUrl } from "../constants/constants";
import { Hero } from "../models/hero";

interface ApiResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Hero[];
}

const fetchHeroes = async (page: number): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${ApiUrl}?page=${page}`);
  return response.data;
};

export { fetchHeroes };