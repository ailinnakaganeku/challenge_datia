import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { en as string } from '../../assets/strings/eng.json';

//Components
import GridCard from '../../components/GridCard/container';
import Button from '../../components/Button/container';

//Styles
import {
  Container,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalImage,
  ModalText,
  Text,
  Line,
  Suggestions,
  Details,
  Title,
  Background,
  Span,
  Display,
  ButtonContainer,
} from './styles';
import { LogoName } from '../../components/NavBar/styles';
import { Movies } from '../LandingPage/styles';
import { colors } from '../../assets/colors';

const TemplateMovieDetail = ({
  movies,
  suggestedMovies,
  handleOnChangePage,
}) => {
  const watchNow = movies.homepage;
  return (
    <>
      <Background
        alt={movies.original_title}
        src={
          movies.poster_path
            ? `http://image.tmdb.org/t/p//w1280${movies.poster_path}`
            : 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
        }
      />
      <Container id={movies.id}>
        <div>
          <ModalHeader>
            <HashLink to='/' style={{ textDecoration: 'none' }}>
              <LogoName>
                <i
                  className={'fa fa-arrow-left'}
                  aria-hidden='true'
                  style={{
                    color: `${colors.white}`,
                    marginRight: 5,
                  }}
                />
                {string.logo_title}
              </LogoName>
            </HashLink>
            <Title>
              <ModalTitle>{movies.original_title}</ModalTitle>
            </Title>
            <Details>
              <Span>
                {movies.release_date && movies.release_date.substring(0, 4)}
              </Span>
              <Span>&#9474;</Span>
              <Span>{movies.runtime} m</Span>
              <Span>&#9474;</Span>
              <i
                className={
                  movies.vote_average >= 5
                    ? 'fa fa-thumbs-up'
                    : 'fa fa-thumbs-down'
                }
                aria-hidden='true'
                style={{
                  color: `${movies.vote_average >= 5 ? '#2ee59d' : '#f50057'}`,
                  marginRight: 5,
                }}
              />
              <Span
                className='vote'
                style={{
                  color: `${movies.vote_average >= 5 ? '#2ee59d' : '#fb0000'}`,
                }}
              >
                {movies.vote_average}
              </Span>
            </Details>
            <ModalText>{movies.overview}</ModalText>
            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'row' }}>
              <a href={watchNow}>
                <Button
                  handleOnClick={watchNow}
                  string={string.watch_now}
                ></Button>
              </a>
            </div>
          </ModalHeader>
          <ModalBody>
            <Display>
              <ModalImage
                src={
                  movies.poster_path
                    ? `http://image.tmdb.org/t/p/w1280${movies.backdrop_path}`
                    : 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
                }
                alt={movies.original_title}
              />
            </Display>
          </ModalBody>
          <Suggestions>
            <Text>{string.suggestions}</Text>
            <Line></Line>
          </Suggestions>
          <Movies>
            {suggestedMovies &&
              suggestedMovies
                .slice(0, 4)
                .map(
                  (movie) =>
                    console.log({ movie }) || (
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
          <ButtonContainer>
            <Button
              handleOnClick={handleOnChangePage}
              string={string.back_home}
            ></Button>
          </ButtonContainer>
        </div>
      </Container>
    </>
  );
};

export default TemplateMovieDetail;
