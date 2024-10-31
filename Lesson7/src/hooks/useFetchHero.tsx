import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../constants/constants";
import { fetchHeroById } from "../api/heroApi";
import { Hero } from "../models/hero";

const useFetchHero = (id: string): Hero | null => {
  const navigate = useNavigate();

  const { data: hero } = useRequest(() => fetchHeroById(id), {
    onError: () => {
      navigate(`${AppRoute.NOT_FOUND}`);
    },
  });

  return hero ?? null;
};

export { useFetchHero };