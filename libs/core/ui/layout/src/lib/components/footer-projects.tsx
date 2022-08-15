import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

import { IconStyled } from '../styles/components/common';

import {
  FooterProjectsStyled,
  ProjectListStyled,
} from '../styles/components/footer-projects';

import logoFoxxGotuje from '../../../../../ui/assets/src/lib/images/logos/foxx-gotuje.png';
import logoAlkoholove101 from '../../../../../ui/assets/src/lib/images/logos/alkoholove-101.png';
import logoTheFoxxesMusic from '../../../../../ui/assets/src/lib/images/logos/the-foxxes-music.png';

export const FooterProjects = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    {
      id: 'foxx-gotuje',
      label: 'Foxx Gotuje',
      url: 'https://www.foxxgotuje.pl',
      img: logoFoxxGotuje,
    },
    {
      id: 'alkoholove-101',
      label: 'Alkoholove 101',
      url: 'https://www.alkoholove101.pl',
      img: logoAlkoholove101,
    },
    {
      id: 'the-foxxes-music',
      label: 'The Foxxes Music',
      url: 'https://www.thefoxxesmusic.com',
      img: logoTheFoxxesMusic,
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
    <FooterProjectsStyled className={className}>
      <span>Śledź Foxx'owe projekty:</span>
      <ProjectListStyled>{routesElements}</ProjectListStyled>
    </FooterProjectsStyled>
  );
};

export default FooterProjects;
