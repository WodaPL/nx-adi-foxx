import {
  Footer,
  LayoutContainerStyled,
  Navbar,
} from '@adi-foxx/core/ui/layout';
import {
  ShowcaseGallery,
  ShowcasePointsVideo,
  ContactForm,
} from '@adi-foxx/core/ui/sections';

export function Index() {
  return (
    <>
      <LayoutContainerStyled>
        <Navbar className="p-standard" aboveContent={true} />
        <ShowcaseGallery />
        <ShowcasePointsVideo id="foxx-gotuje" />
        <ShowcasePointsVideo id="alkoholove-101" />
        <ShowcasePointsVideo id="the-foxxes-music" />
        <ContactForm id="kontakt" />
        <Footer className="p-standard" />
      </LayoutContainerStyled>
    </>
  );
}

export default Index;
