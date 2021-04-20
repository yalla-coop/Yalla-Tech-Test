import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const dropIn = keyframes`
  from {
    opacity: 0;
    display: none;
    transform: translateY(-500px);
  }
  to {
    opacity: 1;
    display: block;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${dropIn} 1s ease forwards;
  animation-delay: ${({ id }) => `calc(${id} * 100ms)`};
  width: 100%;
  padding: 20px;
  background: ${({ theme, bgColor }) =>
    theme.colors[bgColor] || theme.colors.yellow};
  border-top-left-radius: 65px;
  border-bottom-right-radius: 65px;
  box-shadow: 2px 4px 8px;
  text-align: center;
`;
