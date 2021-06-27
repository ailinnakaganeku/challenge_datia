import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints/index';
import { colors } from '../../assets/colors';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 1em;
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-height: 300px;
  max-width: 250px;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 10px 10px 5px ${colors.violet};
  -moz-box-shadow: 10px 10px 5px ${colors.violet};
  -webkit-box-shadow: 10px 10px 5px ${colors.violet};
  -khtml-box-shadow: 10px 10px 5px ${colors.violet};
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  object-fit: contain;
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    box-shadow: 0px 0px 0px;
    -moz-box-shadow: 0px 0px 0px;
    -webkit-box-shadow: 0px 0px 0px;
    -khtml-box-shadow: 0px 0px 0px;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    max-height: 400px;
    max-width: 350px;
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    max-height: 300px;
    max-width: 200px;
  }
`;
