import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { remToPx } from '@adi-foxx/core/helpers';

import {
  NavbarStyled,
  GapContainerStyled,
  ContextContainerStyled,
  LogoContainerStyled,
  InteractionsContainerStyled,
  SeparatorStyled,
} from '../styles/components/navbar';
import { heights } from '../styles/variables';

import NavbarRoutes from './navbar-routes';
import NavbarSocial from './navbar-social';
import NavbarLogo from './navbar-logo';

export const Navbar = ({ className }: { className?: string }) => {
  const contextContainer = useRef(null);
  const [viewportScrolled, setViewportScrolled] = useState(false);

  const onScroll = () => {
    setViewportScrolled(
      window.pageYOffset >= remToPx(heights.navbarDesktop) ? true : false
    );
  };

  useEffect(() => {
    if (!viewportScrolled) {
      if (contextContainer.current)
        gsap.to(contextContainer.current, {
          background: 'rgba(180, 180, 180, 0)',
          backdropFilter: 'blur(0px)',
          duration: 0.75,
        });
    } else {
      if (contextContainer.current)
        gsap.to(contextContainer.current, {
          background: 'rgba(180, 180, 180, 0.3)',
          backdropFilter: 'blur(3px)',
          duration: 0.75,
        });
    }
  }, [viewportScrolled]);

  useEffect(() => {
    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <NavbarStyled>
      <GapContainerStyled className={className}></GapContainerStyled>
      <ContextContainerStyled ref={contextContainer} className={className}>
        <LogoContainerStyled>
          <NavbarLogo />
        </LogoContainerStyled>
        <InteractionsContainerStyled>
          <NavbarRoutes />
          <SeparatorStyled />
          <NavbarSocial />
        </InteractionsContainerStyled>
      </ContextContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
