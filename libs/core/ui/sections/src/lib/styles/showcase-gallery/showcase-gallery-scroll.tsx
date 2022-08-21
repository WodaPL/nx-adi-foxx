import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;

  color: white;

  opacity: 1;

  bottom: 5%;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  align-items: center;

  padding-bottom: 3.5rem;
`;

export const Text = styled.span``;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.img`
  position: absolute;
  height: 3rem;
  width: fit-content;

  filter: invert(1);
`;
