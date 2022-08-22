import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  gap: 1.25rem;

  width: 100%;

  justify-content: center;
`;

export const Logo = styled.img`
  font-size: 5rem;
  width: 45%;

  filter: invert(1);
`;

export const Subtitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  z-index: -50;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
`;
