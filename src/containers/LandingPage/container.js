import React, { useEffect, useState } from 'react';
import TemplateLandingPage from './template';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config';

const headers = {
  'Content-Type': 'application/json',
};

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const handleOnChangeYears = (request) => {
    if (!request) {
      setYear('');
    } else {
      setYear(request.label);
      setPage(1);
    }
  };

  const handleOnChangePage = () => {
    setPage(page + 1);
  };

  const getMovies = React.useCallback(async () => {
    const API = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&primary_release_year=${year}`;
    setLoading(true);
    try {
      const response = await axios.get(API, headers);
      if (response) {
        if (year && page === 1) {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        } else {
          setMovies((movies) => [...movies, ...response.data.results]);
          setTotalPages(response.data.total_pages);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page, year]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
