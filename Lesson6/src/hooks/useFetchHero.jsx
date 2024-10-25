import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute, ApiUrl } from "../constants/constants";

const useFetchHero = (id) => {
    const navigate = useNavigate();
    const [hero, setHero] = useState(null);
  
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