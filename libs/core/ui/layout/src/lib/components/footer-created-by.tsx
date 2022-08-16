import { FooterCreatedByStyled } from '../styles/components/footer-created-by';

import alphaFoxxLogo from '../../../../../ui/assets/src/lib/images/logos/alpha-foxx.png';
import flyingFoxxLogo from '../../../../../ui/assets/src/lib/images/logos/flying-foxx.png';

import Link from 'next/link';
import { IconStyled } from '../styles/components/common';
import { Route } from '@adi-foxx/core/models';

export const FooterCreatedBy = ({ className }: { className?: string }) => {
  const text = `Projekt i wykonanie:`;

  const routes: Route[] = [
    {
      id: 'alpha-foxx',
      label: 'Alpha Foxx',
      url: 'http://alpha-foxx.com/',
      img: alphaFoxxLogo,
    },
    {
      id: 'flying-foxx',
      label: 'Flying Foxx',
      url: 'http://flying-foxx.com/',
      img: flyingFoxxLogo,
    },
  ];

  const routesElements = routes.map((route) => (
    <Link href={route.url} key={route.id}>
      <a>
        <IconStyled
          dark={true}
          src={route.img?.src}
          alt={`${route.label} icon`}
        />
      </a>
    </Link>
  ));

  return (
    <FooterCreatedByStyled className={className}>
      <span>{text}</span>
      {routesElements}
    </FooterCreatedByStyled>
  );
};

export default FooterCreatedBy;
