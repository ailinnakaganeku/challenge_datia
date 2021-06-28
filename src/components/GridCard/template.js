import React from 'react';
import { Container, Image } from './styles';

const TemplateGridCard = ({ movieId, movieName, image }) => {
  return (
    <Container id={movieId}>
      <a href={`/movie/${movieId}`}>
        <Image alt={movieName} src={image} />
      </a>
    </Container>
  );
};
export default TemplateGridCard;
