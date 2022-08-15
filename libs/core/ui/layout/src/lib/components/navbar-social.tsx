import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

import { IconStyled } from '../styles/components/common';

import socialIconFb from '../../../../../ui/assets/src/lib/images/social/facebook.png';
import socialIconIg from '../../../../../ui/assets/src/lib/images/social/instagram.png';

export const NavbarSocial = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/chris.lord.adi',
      img: socialIconFb,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/ardijoe/',
      img: socialIconIg,
    },
  ];

  const routesElements = routes.map((route) => (
    <Link href={route.url} key={route.id}>
      <a>
        <IconStyled src={route.img?.src} alt={`${route.label} icon`} />
      </a>
    </Link>
  ));

  return <>{routesElements}</>;
};

export default NavbarSocial;
