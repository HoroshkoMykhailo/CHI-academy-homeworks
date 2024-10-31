import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute, ApiUrl } from "../constants/constants";
import { Hero } from "../models/hero";

const useFetchHero = (id: string): Hero | null => {
    const navigate = useNavigate();
    const [hero, setHero] = useState<Hero | null>(null);
  
    useEffect(() => {
      const fetchHero = async () => {
        const response = await fetch(`${ApiUrl}/${id}`);
        if (!response.ok) {
          navigate(`${AppRoute.NOT_FOUND}`);
          return;
        }
        const data = await response.json();
        setHero(data);
      };
  
      fetchHero();
    }, [id, navigate]);
  
    return hero;
};
  
export { useFetchHero };