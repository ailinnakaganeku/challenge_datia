import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import TemplateMovieDetail from './template';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config';

const MovieDetail = (props) => {
  const movieId = props.match.params.movieId;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const history = useHistory();

  const headers = {
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    setLoading(true);
    getMoviesForSuggest();
  }, [page]);

  useEffect(() => {
    setLoading(true);
    getMoviesById();
  }, [movieId]);

  const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  async function getMoviesById() {
    const API = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    try {
      const response = await axios.get(API, headers);
      if (response) {
        setPage(random);
        setMovies(response.data);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMoviesForSuggest() {
    const API = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
      const response = await axios.get(API, headers);
      if (response) {
        setSuggestedMovies(response.data.results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

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
