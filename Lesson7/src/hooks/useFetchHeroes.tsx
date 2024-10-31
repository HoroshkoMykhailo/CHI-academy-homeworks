import { useEffect, useState } from "react";
import { ApiUrl } from "../constants/constants";
import { Hero } from "../models/hero";

interface PaginationModel {
  page: number;
  pageSize: number;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Hero[];
}

const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [paginationModel, setPaginationModel] = useState<PaginationModel>({
    page: 0,
    pageSize: 20,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);
      const response = await fetch(`${ApiUrl}?page=${paginationModel.page + 1}`);
      const data: ApiResponse = await response.json();
      setHeroes(data.results);
      setTotalCount(data.info.count);
      setIsLoading(false);
    };

    fetchHeroes();
  }, [paginationModel]);

  return { heroes, totalCount, paginationModel, setPaginationModel, isLoading };
};

export { useFetchHeroes };