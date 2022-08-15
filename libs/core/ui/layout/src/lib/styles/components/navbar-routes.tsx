import styled from 'styled-components';

export const RouteStyled = styled.span`
  color: black;

  -webkit-filter: invert(0);
  filter: invert(0);

  &:hover {
    -webkit-filter: invert(1);
    filter: invert(1);
  }
`;
