import { Route } from '@adi-foxx/core/models';
import Link from 'next/link';
import { RouteStyled } from '../styles/components/navbar-routes';

export const NavbarRoutes = ({ className }: { className?: string }) => {
  const routes: Route[] = [
    { id: 'projekty', label: 'Projekty', url: '#projekty' },
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
