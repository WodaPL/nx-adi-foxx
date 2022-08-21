import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

const adiFoxxLogoUrl = 'images/project-logos/adi-foxx-horizontal.png';

import { LogoStyled } from '../styles/components/common';

export const NavbarLogo = ({ className }: { className?: string }) => {
  const route: Route = {
    id: 'adi-foxx',
    label: 'Adi Foxx',
    url: '/',
    imageUrl: adiFoxxLogoUrl,
  };

  return (
    <Link href={route.url}>
      <a>
        <LogoStyled src={route.imageUrl} alt={`${route.label} icon`} />
      </a>
    </Link>
  );
};

export default NavbarLogo;
