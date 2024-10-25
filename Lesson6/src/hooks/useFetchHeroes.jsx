import { useEffect, useState } from "react";

const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${paginationModel.page + 1}`);
      const data = await response.json();
      setHeroes(data.results);
      setTotalCount(data.info.count);
    };

    fetchHeroes();
  }, [paginationModel]);

  return { heroes, totalCount, paginationModel, setPaginationModel };
};

export { useFetchHeroes };