import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../api/heroesApi";
import { Hero } from "../models/hero";

interface PaginationModel {
  page: number;
  pageSize: number;
}

const useFetchHeroes = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [paginationModel, setPaginationModel] = useState<PaginationModel>({
    page: 0,
    pageSize: 20,
  });

  const { data, error, loading, run } = useRequest(() => fetchHeroes(paginationModel.page + 1), {
    manual: true,
    onSuccess: (result) => {
      setTotalCount(result.info.count);
    },
  });

  useEffect(() => {
    run();
  }, [paginationModel])

  const heroes: Hero[] = data?.results ?? [];

  return { heroes, totalCount, paginationModel, setPaginationModel, isLoading: loading, error };
};

export { useFetchHeroes };