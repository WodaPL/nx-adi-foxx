import { Route } from '@adi-foxx/core/models';
import { FooterCopyrightStyled } from '../styles/components/footer-copyright';

const adiFoxxLogoUrl = 'images/project-logos/adi-foxx-horizontal.png';

import Link from 'next/link';
import { LogoStyled } from '../styles/components/common';

export const FooterCopyright = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();
  const textFirstLine = `${currentYear} © Adi Foxx`;
  const textSecondLine = `Wszelkie prawa zastrzeżone`;

  const route: Route = {
    id: 'adi-foxx',
    label: 'Adi Foxx',
    url: '/',
    imageUrl: adiFoxxLogoUrl,
  };

  return (
    <FooterCopyrightStyled className={className}>
      <Link href={route.url}>
        <a>
          <LogoStyled
            dark={true}
            src={route.imageUrl}
            alt={`${route.label} icon`}
          />
        </a>
      </Link>
      <span>{textFirstLine}</span>
      <span>{textSecondLine}</span>
    </FooterCopyrightStyled>
  );
};

export default FooterCopyright;
