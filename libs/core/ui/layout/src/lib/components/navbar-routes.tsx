import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';
import { RouteStyled } from '../styles/components/navbar-routes';

export const NavbarRoutes = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    { id: 'projekty', label: 'Foxx Gotuje', url: '#foxx-gotuje' },
    { id: 'projekty', label: 'Alkoholove101', url: '#alkoholove-101' },
    { id: 'projekty', label: 'The Foxxes Music', url: '#the-foxxes-music' },
    { id: 'kontakt', label: 'Kontakt', url: '#kontakt' },
  ];

  const routesElements = routes.map((route) => (
    <Link href={route.url} key={route.id}>
      <a>
        <RouteStyled>{route.label}</RouteStyled>
      </a>
    </Link>
  ));

  return <>{routesElements}</>;
};

export default NavbarRoutes;
