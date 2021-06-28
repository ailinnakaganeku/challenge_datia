import React from 'react';
import { Container, Movies, Pagination, Text, Line, Fragment } from './styles';
import { en as string } from '../../assets/strings/eng.json';

//Components
import GridCard from '../../components/GridCard/container';
import NavBar from '../../components/NavBar/container';
import Button from '../../components/Button/container';
import Spinner from '../../components/Spinner/container';

const TemplateLandingPage = ({
  movies,
  handleOnChangeYears,
  totalPages,
  page,
  handleOnChangePage,
  loading,
}) => {
  return (
    <Fragment>
      <NavBar handleOnChangeYears={handleOnChangeYears} />
      <Container>
        <Text>{string.most_popular}</Text>
        <Line></Line>
        <Movies>
          {loading && <Spinner />}
          {!loading &&
            movies &&
            movies.map(
              (movie) =>
                console.log(movie.id, movie.original_title) || (
                  <GridCard
                    image={
                      movie.poster_path
                        ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
                    }
                    movieName={movie.original_title}
                    movieId={movie.id}
                    key={movie.id}
                  />
                )
            )}
        </Movies>
        <Pagination>
          {totalPages !== page && (
            <Button
              handleOnClick={handleOnChangePage}
              string={string.load}
            ></Button>
          )}
        </Pagination>
      </Container>
    </Fragment>
  );
};

export default TemplateLandingPage;
