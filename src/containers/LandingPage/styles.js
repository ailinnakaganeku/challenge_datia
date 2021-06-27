import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints/index';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 1rem;
  position: relative;
  background: rgb(150, 109, 177);
  background: linear-gradient(
    90deg,
    rgba(150, 109, 177, 1) 0%,
    rgba(25, 20, 20, 1) 50%,
    rgba(103, 147, 207, 1) 100%
  );
`;

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Text = styled.h1`
  color: #fbfaf5;
  text-transform: uppercase;
  line-height: 2.5em;
  font-size: 40px;
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 19px;
    text-align: center;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 25px;
    max-width: 80%;
    text-align: center;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Line = styled.div`
  border: 1px solid #fbfaf5;
  width: 70px;
  background-color: #fbfaf5;
`;

export const Fragment = styled.div``;
