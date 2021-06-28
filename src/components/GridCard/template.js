import React from 'react';
import { Container, Image } from './styles';

const TemplateGridCard = ({ key, movieId, movieName, image }) => {
  return (
    <Container key={key} id={movieId}>
      <a href={`/movie/${movieId}`}>
        <Image alt={movieName} src={image} />
      </a>
    </Container>
  );
};
export default TemplateGridCard;
