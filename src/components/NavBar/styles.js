import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints/index';
import { colors } from '../../assets/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: rgb(150, 109, 177);
  background: linear-gradient(
    90deg,
    rgba(150, 109, 177, 1) 0%,
    rgba(25, 20, 20, 1) 50%,
    rgba(103, 147, 207, 1) 100%
  );
  position: fixed;
  height: 4rem;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const LogoName = styled.h3`
  position: relative;
  color: ${colors.white};
  text-transform: uppercase;
  font-family: 'Holtwood One SC', serif;
  font-family: 'Rowdies', cursive;
  letter-spacing: 2px;
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 14px;
  }
  @media (min-height: 1300px) {
    max-width: 100%;
  }
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const Filter = styled.div`
  width: 250px;
  @media (max-width: ${breakpoints.mobileMin}) {
    width: 190px;
  }
  @media (max-width: ${breakpoints.iphone}) {
    width: 190px;
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    width: 160px;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    width: 170px;
  }
  @media (max-width: 300px) {
    width: 160px;
    font-size: 14px;
  }
`;
