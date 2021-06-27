import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const rotate = keyframes`
	0% { transform: rotateZ(0) }
	100% { transform: rotateZ(360deg) }
`;

export const Spinner = styled.div`
  width: 5em;
  height: 5em;
  border: 5px solid red;
  border-right-color: black;
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;
`;
