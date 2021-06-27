import React from 'react';
import TemplateButton from './template';

const Button = ({ handleOnClick, string }) => {
  return <TemplateButton handleOnClick={handleOnClick} string={string} />;
};

export default Button;
