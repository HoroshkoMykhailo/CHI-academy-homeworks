import { useEffect, useState } from "react";
import { ApiUrl } from "../constants/constants";

const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);
      const response = await fetch(`${ApiUrl}?page=${paginationModel.page + 1}`);
      const data = await response.json();
      setHeroes(data.results);
      setTotalCount(data.info.count);
      setIsLoading(false);
    };

    fetchHeroes();
  }, [paginationModel]);

  return { heroes, totalCount, paginationModel, setPaginationModel, isLoading };
};

export { useFetchHeroes };