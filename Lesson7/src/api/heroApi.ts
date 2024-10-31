import axios from "axios";
import { ApiUrl } from "../constants/constants";
import { Hero } from "../models/hero";

const fetchHeroById = async (id: string): Promise<Hero> => {
  const response = await axios.get<Hero>(`${ApiUrl}/${id}`);
  return response.data;
};

export { fetchHeroById };