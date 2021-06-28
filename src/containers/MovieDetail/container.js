import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import TemplateMovieDetail from './template';
import { API_KEY, API_URL } from '../../config';

const headers = {
  'Content-Type': 'application/json',
};

const MovieDetail = (props) => {
  const movieId = props.match.params.movieId;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const history = useHistory();

  const getMoviesById = React.useCallback(async () => {
    const API = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    setLoading(true);
    try {
      const response = await axios.get(API, headers);
      if (response) {
        setPage(random);
        setMovies(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    getMoviesById();
  }, [getMoviesById]);

  const getMoviesForSuggest = React.useCallback(async () => {
    const API = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    setLoading(true);
    try {
      const response = await axios.get(API, headers);
      if (response) {
        setSuggestedMovies(response.data.results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    getMoviesForSuggest();
  }, [getMoviesForSuggest]);

  const handleOnChangePage = () => {
    history.push('/');
  };

  return (
    <TemplateMovieDetail
      movies={movies}
      suggestedMovies={suggestedMovies}
      handleOnChangePage={handleOnChangePage}
    />
  );
};

export default withRouter(MovieDetail);
