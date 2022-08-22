import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.75rem;
`;

export const Title = styled.h3`
  color: white;
  font-weight: 500;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
`;

export const Link = styled.a``;

export const Icon = styled.img`
  height: 3.5rem;
  filter: invert(1);

  &:hover {
    filter: invert(0.6);
  }
`;
