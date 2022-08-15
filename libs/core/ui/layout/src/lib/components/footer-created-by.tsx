import { FooterCreatedByStyled } from '../styles/components/footer-created-by';

import alphaFoxxLogo from '../../../../../ui/assets/src/lib/images/logos/alpha-foxx.png';
import Link from 'next/link';
import { IconStyled } from '../styles/components/common';

export const FooterCreatedBy = ({ className }: { className?: string }) => {
  const text = `Projekt i wykonanie:`;

  const route: Route = {
    id: 'alpha-foxx',
    label: 'Alpha Foxx',
    url: 'http://alpha-foxx.com/',
    img: alphaFoxxLogo,
  };

  return (
    <FooterCreatedByStyled className={className}>
      <span>{text}</span>
      <Link href={route.url}>
        <a>
          <IconStyled
            dark={true}
            src={route.img?.src}
            alt={`${route.label} icon`}
          />
        </a>
      </Link>
    </FooterCreatedByStyled>
  );
};

export default FooterCreatedBy;
