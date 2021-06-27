import React from 'react';
import TemplateNavBar from './template';

const NavBar = ({ handleOnChangeYears, isDisabled }) => {
 
  return (
    <TemplateNavBar
      handleOnChangeYears={handleOnChangeYears}
      isDisabled={isDisabled}
    />
  );
};

export default NavBar;
