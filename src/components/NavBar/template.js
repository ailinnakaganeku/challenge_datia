import React from 'react';
import { Container, LogoName, Filter } from './styles';
import Select from 'react-select';
import { en as string } from '../../assets/strings/eng.json';
import { colors } from '../../assets/colors';

const TemplateNavBar = ({ handleOnChangeYears, isDisabled }) => {
  const yearOptions = [];
  for (let i = 2021; i >= 1900; i--) {
    yearOptions.push({ value: i, label: i });
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: ' #191414',
      backgroundColor: state.isSelected && '#966db1',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#191414',
    }),
    control: (provided, state) => ({
      ...provided,
      border: '0',
      boxShadow: state.isFocused ? '0 0 0 2px #966db1' : '0 0 0 2px  #191414',
      '&:hover': {
        border: '0 ',
      },
    }),
  };

  return (
    <Container>
      <LogoName>{string.logo_title}</LogoName>
      <Filter>
        <Select
          options={yearOptions}
          isClearable={true}
          styles={customStyles}
          placeholder={string.filter}
          instanceId={'react-01'}
          inputId={'react-01'}
          onChange={handleOnChangeYears}
          isDisabled={isDisabled}
        />
      </Filter>
    </Container>
  );
};

export default TemplateNavBar;
