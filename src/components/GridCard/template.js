import React from 'react';
import { Container, Image } from './styles';
import { nanoid } from "nanoid";

const TemplateGridCard = ({movieId, movieName, image }) => {
  return (
    <Container key={nanoid()} id={movieId}>
      <a href={`/movie/${movieId}`}>
        <Image alt={movieName} src={image} />
      </a>
    </Container>
  );
};
export default TemplateGridCard;
