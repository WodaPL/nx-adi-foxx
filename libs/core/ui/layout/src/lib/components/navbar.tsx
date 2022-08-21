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

export const Navbar = ({
  className,
  aboveContent = false,
}: {
  className?: string;
  aboveContent?: boolean;
}) => {
  const [viewportExceeded, setViewportExceeded] = useState(false);
  const contextContainer = useRef(null);
  let actualHeightPx = 0;

  const onScroll = () => {
    setViewportExceeded(window.pageYOffset >= actualHeightPx);
  };

  useEffect(() => {
    if (!viewportExceeded) {
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
  }, [viewportExceeded]);

  useEffect(() => {
    actualHeightPx = remToPx(heights.navbarDesktop);
    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <NavbarStyled aboveContent={aboveContent}>
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
