import React from 'react';
import TemplateGridCard from './template';

const GridCard = ({ key, movieId, movieName, image, title }) => {
  return (
    <TemplateGridCard
      movieName={movieName}
      image={image}
      movieId={movieId}
      title={title}
      key={key}
    />
  );
};

export default GridCard;
