import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';

import adiFoxxLogo from '../../../../../ui/assets/src/lib/images/logos/adi-foxx.png';

import { LogoStyled } from '../styles/components/common';

export const NavbarLogo = ({ className }: { className?: string }) => {
  const route: Route = {
    id: 'adi-foxx',
    label: 'Adi Foxx',
    url: '/',
    img: adiFoxxLogo,
  };

  return (
    <Link href={route.url}>
      <a>
        <LogoStyled src={route.img?.src} alt={`${route.label} icon`} />
      </a>
    </Link>
  );
};

export default NavbarLogo;
