import styled from 'styled-components';

export const IconStyled = styled.img`
  --normal-invert-value: ${({ dark }: { dark?: boolean }) => (!dark ? 0 : 0.9)};
  --hover-invert-value: ${({ dark }: { dark?: boolean }) => (!dark ? 1 : 0.65)};

  height: 1.75rem;

  -webkit-filter: invert(var(--normal-invert-value));
  filter: invert(var(--normal-invert-value));

  &:hover {
    -webkit-filter: invert(var(--hover-invert-value));
    filter: invert(var(--hover-invert-value));
  }
`;

export const LogoStyled = styled.img`
  --normal-invert-value: ${({ dark }: { dark?: boolean }) => (!dark ? 0 : 0.9)};
  --hover-invert-value: ${({ dark }: { dark?: boolean }) => (!dark ? 1 : 0.65)};

  height: 2.5rem;

  -webkit-filter: invert(var(--normal-invert-value));
  filter: invert(var(--normal-invert-value));

  &:hover {
    -webkit-filter: invert(var(--hover-invert-value));
    filter: invert(var(--hover-invert-value));
  }
`;
