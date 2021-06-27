import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import TemplateMovieDetail from './template';
import axios from 'axios';

const MovieDetail = (props) => {
  const movieId = props.match.params.movieId;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  const history = useHistory();

  const headers = {
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    setLoading(true);
    getMoviesForSuggest();
  }, []);

  useEffect(() => {
    setLoading(true);
    getMoviesById();
  }, [movieId]);

  async function getMoviesById() {
    const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3504a963b5eddb74923319a7e1dab880&language=en-US`;
    try {
      const response = await axios.get(API, headers);
      if (response) {
        console.log('ACA BY ID');
        console.log(response);
        setMovies(response.data);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMoviesForSuggest() {
    const API = `https://api.themoviedb.org/3/movie/top_rated?api_key=3504a963b5eddb74923319a7e1dab880&language=en-US&page=1`;
    try {
      const response = await axios.get(API, headers);
      if (response) {
        console.log('ACA BY SUGG');
        console.log(response);
        setSuggestedMovies(response.data.results);
        console.log(suggestedMovies);
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
