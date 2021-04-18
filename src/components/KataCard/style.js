import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background: ${({ theme, bgColor }) =>
    theme.colors[bgColor] || theme.colors.yellow};
  border-radius: 15px;
  box-shadow: 2px 4px 8px;
  text-align: center;
`;
