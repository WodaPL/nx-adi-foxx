import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;
`;

export const Icon = styled.img`
  filter: invert(1);
  height: 3rem;
  object-fit: contain;
`;

export const Result = styled.span`
  font-size: 2rem;
`;
