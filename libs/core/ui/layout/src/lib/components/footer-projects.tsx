import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

import { IconStyled } from '../styles/components/common';

import {
  FooterProjectsStyled,
  ProjectListStyled,
} from '../styles/components/footer-projects';

const foxxGotujeLogoUrl = 'images/project-logos/foxx-gotuje-horizontal.png';
const alkoholove101LogoUrl =
  'images/project-logos/alkoholove-101-horizontal.png';
const theFoxxesMusicLogoUrl =
  'images/project-logos/the-foxxes-music-horizontal.png';

export const FooterProjects = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    {
      id: 'foxx-gotuje',
      label: 'Foxx Gotuje',
      url: 'https://www.foxxgotuje.pl',
      imageUrl: foxxGotujeLogoUrl,
    },
    {
      id: 'alkoholove-101',
      label: 'Alkoholove 101',
      url: 'https://www.alkoholove101.pl',
      imageUrl: alkoholove101LogoUrl,
    },
    {
      id: 'the-foxxes-music',
      label: 'The Foxxes Music',
      url: 'https://www.thefoxxesmusic.com',
      imageUrl: theFoxxesMusicLogoUrl,
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
    <FooterProjectsStyled className={className}>
      <span>Śledź Foxx'owe projekty:</span>
      <ProjectListStyled>{routesElements}</ProjectListStyled>
    </FooterProjectsStyled>
  );
};

export default FooterProjects;
