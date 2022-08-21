import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

import { IconStyled } from '../styles/components/common';

const facebookIconUrl = 'images/social-icons/facebook.png';
const instagramIconUrl = 'images/social-icons/instagram.png';

export const NavbarSocial = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/chris.lord.adi',
      imageUrl: facebookIconUrl,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/ardijoe/',
      imageUrl: instagramIconUrl,
    },
  ];

  const routesElements = routes.map((route) => (
    <Link href={route.url} key={route.id}>
      <a>
        <IconStyled src={route.imageUrl} alt={`${route.label} icon`} />
      </a>
    </Link>
  ));

  return <>{routesElements}</>;
};

export default NavbarSocial;
