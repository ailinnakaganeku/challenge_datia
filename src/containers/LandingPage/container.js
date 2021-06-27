import React, { useEffect, useState } from 'react';
import TemplateLandingPage from './template';
import axios from 'axios';

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState(false);

  const API = `https://api.themoviedb.org/3/discover/movie?api_key=3504a963b5eddb74923319a7e1dab880&language=en-US&sort_by=popularity.desc&page=${page}&primary_release_year=${year}`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const handleOnChangeYears = (request) => {
    if (!request) {
      setYear('');
    } else {
      setYear(request.label);
    }
  };

  const handleOnChangePage = () => {
    setPage(page + 1);
  };

  async function getMovies(API) {
    try {
      const response = await axios.get(API, headers);
      if (response) {
        setMovies([...movies, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getMovies(API);
  }, [page, year]);

  return (
    <TemplateLandingPage
      movies={movies}
      handleOnChangeYears={handleOnChangeYears}
      totalPages={totalPages}
      handleOnChangePage={handleOnChangePage}
    />
  );
};

export default LandingPage;
