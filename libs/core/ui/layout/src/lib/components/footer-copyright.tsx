import { Route } from '@adi-foxx/core/models';
import { FooterCopyrightStyled } from '../styles/components/footer-copyright';

import adiFoxxLogo from '../../../../../ui/assets/src/lib/images/logos/adi-foxx.png';
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
    img: adiFoxxLogo,
  };

  return (
    <FooterCopyrightStyled className={className}>
      <Link href={route.url}>
        <a>
          <LogoStyled
            dark={true}
            src={route.img?.src}
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
