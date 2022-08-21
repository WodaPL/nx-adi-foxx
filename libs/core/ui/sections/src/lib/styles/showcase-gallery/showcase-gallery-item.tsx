import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: calc(100% / 3);
  position: relative;
  filter: grayscale(1);
`;

export const Info = styled.div`
  position: absolute;
  z-index: -70;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 85%;
  filter: invert(1);
  margin-bottom: 1.5rem;
`;

export const HoverInfo = styled.div`
  height: 0;
  opacity: 0;

  width: 90%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div``;

export const Button = styled.a`
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 5px;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.15);
  margin-top: 1.25rem;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    color: white;
    cursor: pointer;
  }
`;

export const ContentOverlay = styled.img`
  position: absolute;
  z-index: -80;

  width: 100%;
  height: 100%;

  object-fit: cover;
  opacity: 1;
`;

export const Video = styled.video`
  position: absolute;
  z-index: -100;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
