import React from 'react';
import { Button, Span } from './styles';

const TemplateButton = ({ handleOnClick, string }) => {
  return (
    <div>
      <Button onClick={handleOnClick}>
        <Span>{string}</Span>
      </Button>
    </div>
  );
};

export default TemplateButton;
