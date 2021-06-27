import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints/index';
import { colors } from '../../assets/colors';

export const Button = styled.button`
  padding: 12px 45px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  outline: none;
  transition: all 0.3s ease 0s;
  margin-right: 30px;
  white-space: nowrap;
  text-align: center;
  border-radius: 500px;
  :hover {
    transform: translateY(-7px);
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    padding: 10px 35px;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    padding: 12px 35px;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 12px 35px;
  }
  @media (max-width: ${breakpoints.iphone}) {
    padding: 12px 35px;
  }
`;
export const Span = styled.h5`
  color: ${colors.black};
  font-size: 16px;
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 13px;
  }
`;
