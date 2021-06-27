import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { breakpoints } from '../../assets/breakpoints/index';
import { colors } from '../../assets/colors';

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 50px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: rgb(150, 109, 177);
  background: linear-gradient(
    90deg,
    rgba(150, 109, 177, 1) 0%,
    rgba(25, 20, 20, 1) 50%,
    rgba(103, 147, 207, 1) 100%
  );
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    padding: 0px 0;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    padding: 40px 0;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    padding: 40px 0;
  }

  @media (min-width: ${breakpoints.iphone}) {
    padding: 50px 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 1em;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (min-width: ${breakpoints.iphone}) {
    margin-top: 40px;
    padding: 1.1em;
  }
  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 40px;
    padding: 1em;
  }
`;
export const Title = styled.div`
  color: ${colors.white};
`;

export const ModalTitle = styled.h1`
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.03em;
  transform: translateY(30px);
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;
  margin-top: 1em;
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 19px;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 22px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2em;
  height: auto;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 1em;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    padding: 1em;
  }
`;

export const ModalImage = styled.img`
  margin: 50px 0 20px 0;
  width: 100%;
  min-height: 30em;
  border-radius: 4px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 20px 20px rgb(0 0 0 / 80%);
  @media (max-width: ${breakpoints.mobileMin}) {
    min-height: 10em;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    min-height: 10em;
    margin: 10px 0 20px 0;
  }
`;

export const Display = styled.div`
  display: flex;
  height: auto;
  padding: 1em;
`;

export const ModalText = styled.p`
  margin: 50px 0px;
  color: rgb(105, 105, 105);
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  color: ${colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  max-width: 80%;
  z-index: 1;
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    max-width: 90%;
    text-align: start;
    line-height: 160%;
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Text = styled.h1`
  color: ${colors.white};
  text-transform: uppercase;
  line-height: 2.5em;
  max-width: 90%;
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 15px;
    text-align: center;
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 18px;
    text-align: center;
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Line = styled.div`
  border: 1px solid ${colors.white};
  width: 70px;
  background-color: ${colors.white};
`;

export const Suggestions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(150, 109, 177);
  background: linear-gradient(
    90deg,
    rgba(150, 109, 177, 1) 0%,
    rgba(25, 20, 20, 1) 50%,
    rgba(103, 147, 207, 1) 100%
  );
`;

export const Details = styled.div`
  margin-top: 1em;
  z-index: 1;
`;

export const Background = styled.img`
  width: 100%;
  position: absolute;
  filter: blur(5px);
  -webkit-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-filter: brightness(0.3);
  filter: brightness(0.3);
  max-height: 150vh;
  object-fit: cover;
  @media (max-width: ${breakpoints.mobileMax}) {
    height: 100%;
    min-height: 100vh;
  }
`;

export const Span = styled.span`
  color: ${colors.white};
  margin-right: 1em;
  padding: 1px;
  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 16px;
    margin-right: 0.2em;
  }
  @media (max-width: ${breakpoints.mobileDinosaur}) {
    font-size: 15px;
  }
  @media (max-width: ${breakpoints.tabletMax}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
