import {
  Footer,
  LayoutContainerStyled,
  MainContainerStyled,
  Navbar,
} from '@adi-foxx/core/ui/layout';

export function Index() {
  return (
    <>
      <LayoutContainerStyled>
        <Navbar />
        <MainContainerStyled>
          <div>
            <div>yyy</div>
          </div>
        </MainContainerStyled>
        <Footer />
      </LayoutContainerStyled>
    </>
  );
}

export default Index;
