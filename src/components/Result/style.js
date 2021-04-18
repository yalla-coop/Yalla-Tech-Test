import styled from '@emotion/styled';
import * as T from '../Typography';

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: gray;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Ul = styled.ul`
  padding: 10px 20px;
`;

export const InlineP = styled(T.P)`
  display: inline-block;
  padding: 0 0 15px 10px;
`;

export const Span = styled.span`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] || color : 'inherent'};
`;
