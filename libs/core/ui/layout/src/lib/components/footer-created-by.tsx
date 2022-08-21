import { FooterCreatedByStyled } from '../styles/components/footer-created-by';

const alphaFoxxLogoUrl = 'images/project-logos/alpha-foxx-horizontal.png';
const flyingFoxxLogoUrl = 'images/project-logos/flying-foxx-horizontal.png';

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
      imageUrl: alphaFoxxLogoUrl,
    },
    {
      id: 'flying-foxx',
      label: 'Flying Foxx',
      url: 'http://flying-foxx.com/',
      imageUrl: flyingFoxxLogoUrl,
    },
  ];

  const routesElements = routes.map((route) => (
    <Link href={route.url} key={route.id}>
      <a>
        <IconStyled
          dark={true}
          src={route.imageUrl}
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
