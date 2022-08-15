import { FooterStyled } from '../styles/components/footer';

import FooterCopyright from './footer-copyright';
import FooterCreatedBy from './footer-created-by';
import FooterProjects from './footer-projects';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <FooterStyled className={className}>
      <FooterProjects />
      <FooterCopyright />
      <FooterCreatedBy />
    </FooterStyled>
  );
};

export default Footer;
