import styled from 'styled-components';
import { heights } from '../variables';

export const NavbarStyled = styled.nav`
  position: relative;

  width: 100%;
`;

export const GapContainerStyled = styled.div`
  width: 100%;
  height: ${heights.navbarDesktop};
`;

export const ContextContainerStyled = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const LogoContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InteractionsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const SeparatorStyled = styled.span`
  height: 100%;
  border-left: 2px solid black;
`;
