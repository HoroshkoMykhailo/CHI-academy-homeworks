import React from 'react';
import { useState, useEffect } from 'react';
import CharacterList from './components/characterList';
import Pagination from './components/pagination';
import Loading from './components/loading';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const handleNext = () => {
    if (data?.info?.next) {
      setUrl(data.info.next);
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (data?.info?.prev) {
      setUrl(data.info.prev);
      setPage(page - 1);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CharacterList characters={data.results} />
          <Pagination
            page={page}
            handleNext={handleNext}
            handlePrev={handlePrev}
            hasNext={!!data.info.next}
            hasPrev={!!data.info.prev}
          />
        </>
      )}
    </div>
  );
};

export default App;