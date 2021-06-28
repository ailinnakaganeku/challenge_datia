import React from 'react';
import TemplateGridCard from './template';

const GridCard = ({ movieId, movieName, image, title }) => {
  return (
    <TemplateGridCard
      movieName={movieName}
      image={image}
      movieId={movieId}
      title={title}
    />
  );
};

export default GridCard;
