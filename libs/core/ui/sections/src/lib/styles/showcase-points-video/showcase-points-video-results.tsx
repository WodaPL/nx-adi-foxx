import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: white;
  font-weight: 500;
`;

export const ResultsContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  column-gap: 1.75rem;
`;

export const ResultTypeContainer = styled.div`
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
