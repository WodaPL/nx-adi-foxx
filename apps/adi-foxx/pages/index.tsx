import {
  Footer,
  LayoutContainerStyled,
  MainContainerStyled,
  Navbar,
} from '@adi-foxx/core/ui/layout';
import {
  ShowcaseGallery,
  ShowcasePointsTrapezoid,
  ContactForm,
} from '@adi-foxx/core/ui/sections';

export function Index() {
  return (
    <>
      <LayoutContainerStyled>
        <Navbar className="p-standard" aboveContent={true} />
        <ShowcaseGallery />
        <ShowcasePointsTrapezoid id="projekty" />
        <ShowcasePointsTrapezoid />
        <ShowcasePointsTrapezoid />
        <ContactForm id="kontakt" />
        {/* <MainContainerStyled className="p-standard">
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              cursus lectus sed metus finibus, sed gravida purus tristique. Ut
              cursus, est at varius placerat, velit velit finibus lorem, ac
              posuere nunc nulla non lacus. Sed hendrerit congue nunc. In
              volutpat aliquet nulla a maximus. In consequat rutrum ante, vel
              sodales nisl iaculis in. Maecenas eleifend euismod egestas. Morbi
              eleifend ligula ut posuere semper. Mauris ac interdum justo.
              Maecenas id nisi ut lacus pulvinar iaculis sit amet et elit.
              Vivamus accumsan lacinia libero efficitur feugiat. Integer vel
              pharetra ligula, eget fermentum metus. Donec urna sapien, tempus
              ultricies vehicula sed, fermentum eu justo. Nulla eleifend
              vestibulum tortor, id bibendum augue posuere in. Ut nec risus nec
              metus euismod imperdiet. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Phasellus tincidunt
              est nec dolor cursus, et viverra justo volutpat. Cras id eros non
              tellus molestie tincidunt in ut risus. Praesent quis magna neque.
              Vestibulum pulvinar diam ac urna porttitor, at facilisis nisl
              efficitur. Maecenas nec tortor ornare, dictum sem ac, mollis orci.
              Suspendisse neque eros, ultrices in mi vel, suscipit fermentum
              sem. Fusce lacinia risus ac scelerisque fermentum. Quisque non
              enim euismod, efficitur turpis vel, lacinia metus. Ut tellus
              lorem, facilisis eu egestas eget, viverra gravida leo. Nulla sit
              amet sem elementum, lobortis purus quis, varius sem. Duis
              elementum in libero in rutrum. Curabitur tincidunt commodo lorem
              sit amet blandit. Proin vel neque nec felis viverra fringilla quis
              vitae diam. Suspendisse sagittis molestie mi. Nullam a sem nec
              arcu dictum venenatis. Donec vitae massa id massa suscipit semper.
              Morbi et faucibus ante, dignissim lobortis arcu. Duis elementum
              euismod nulla, nec maximus justo fringilla vitae. Cras lectus
              nisl, condimentum sit amet fermentum non, tristique non sem. Duis
              mollis diam diam, a facilisis justo mollis ultrices. Pellentesque
              pharetra dignissim pulvinar. Curabitur blandit vestibulum diam,
              porttitor dapibus justo vulputate sed. Curabitur sagittis libero
              sit amet fringilla lacinia. Proin elit nulla, dapibus vitae
              feugiat placerat, egestas egestas leo. Donec pulvinar nulla
              tristique, faucibus diam ut, vehicula mi. Praesent auctor ante
              quis turpis faucibus efficitur ut sit amet diam. Sed sed egestas
              neque, eu vehicula sem. Pellentesque eget lorem in velit viverra
              semper. Ut at quam gravida, ullamcorper lorem eget, sodales quam.
              Suspendisse dolor velit, porttitor dapibus pretium et, rutrum in
              nulla. Praesent volutpat orci leo, sed rutrum dui euismod sit
              amet. Mauris sed metus mauris. Suspendisse dignissim ex id odio
              malesuada, sed ornare elit dignissim. Fusce vestibulum mi sit amet
              maximus tempor. Nam quam nunc, pulvinar et dui ac, viverra
              vulputate enim. Donec interdum odio et ornare rutrum. Nunc nulla
              massa, tincidunt nec augue sed, rutrum volutpat tellus. In egestas
              sodales magna, at vestibulum magna porta nec. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Cras vehicula commodo est, sit amet rhoncus orci ultrices
              id. Sed id felis luctus, sodales sem eu, consectetur leo.
              Pellentesque molestie ut dolor ut tincidunt. Vestibulum mollis
              malesuada nibh. Suspendisse pharetra, elit at tristique molestie,
              lorem ex porttitor quam, sit amet ultrices lorem orci ut purus.
              Nullam nisi erat, finibus id erat nec, suscipit efficitur mi. Nam
              at gravida nibh. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi cursus lectus sed metus finibus, sed
              gravida purus tristique. Ut cursus, est at varius placerat, velit
              velit finibus lorem, ac posuere nunc nulla non lacus. Sed
              hendrerit congue nunc. In volutpat aliquet nulla a maximus. In
              consequat rutrum ante, vel sodales nisl iaculis in. Maecenas
              eleifend euismod egestas. Morbi eleifend ligula ut posuere semper.
              Mauris ac interdum justo. Maecenas id nisi ut lacus pulvinar
              iaculis sit amet et elit. Vivamus accumsan lacinia libero
              efficitur feugiat. Integer vel pharetra ligula, eget fermentum
              metus. Donec urna sapien, tempus ultricies vehicula sed, fermentum
              eu justo. Nulla eleifend vestibulum tortor, id bibendum augue
              posuere in. Ut nec risus nec metus euismod imperdiet. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Phasellus tincidunt est nec dolor cursus, et
              viverra justo volutpat. Cras id eros non tellus molestie tincidunt
              in ut risus. Praesent quis magna neque. Vestibulum pulvinar diam
              ac urna porttitor, at facilisis nisl efficitur. Maecenas nec
              tortor ornare, dictum sem ac, mollis orci. Suspendisse neque eros,
              ultrices in mi vel, suscipit fermentum sem. Fusce lacinia risus ac
              scelerisque fermentum. Quisque non enim euismod, efficitur turpis
              vel, lacinia metus. Ut tellus lorem, facilisis eu egestas eget,
              viverra gravida leo. Nulla sit amet sem elementum, lobortis purus
              quis, varius sem. Duis elementum in libero in rutrum. Curabitur
              tincidunt commodo lorem sit amet blandit. Proin vel neque nec
              felis viverra fringilla quis vitae diam. Suspendisse sagittis
              molestie mi. Nullam a sem nec arcu dictum venenatis. Donec vitae
              massa id massa suscipit semper. Morbi et faucibus ante, dignissim
              lobortis arcu. Duis elementum euismod nulla, nec maximus justo
              fringilla vitae. Cras lectus nisl, condimentum sit amet fermentum
              non, tristique non sem. Duis mollis diam diam, a facilisis justo
              mollis ultrices. Pellentesque pharetra dignissim pulvinar.
              Curabitur blandit vestibulum diam, porttitor dapibus justo
              vulputate sed. Curabitur sagittis libero sit amet fringilla
              lacinia. Proin elit nulla, dapibus vitae feugiat placerat, egestas
              egestas leo. Donec pulvinar nulla tristique, faucibus diam ut,
              vehicula mi. Praesent auctor ante quis turpis faucibus efficitur
              ut sit amet diam. Sed sed egestas neque, eu vehicula sem.
              Pellentesque eget lorem in velit viverra semper. Ut at quam
              gravida, ullamcorper lorem eget, sodales quam. Suspendisse dolor
              velit, porttitor dapibus pretium et, rutrum in nulla. Praesent
              volutpat orci leo, sed rutrum dui euismod sit amet. Mauris sed
              metus mauris. Suspendisse dignissim ex id odio malesuada, sed
              ornare elit dignissim. Fusce vestibulum mi sit amet maximus
              tempor. Nam quam nunc, pulvinar et dui ac, viverra vulputate enim.
              Donec interdum odio et ornare rutrum. Nunc nulla massa, tincidunt
              nec augue sed, rutrum volutpat tellus. In egestas sodales magna,
              at vestibulum magna porta nec. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras
              vehicula commodo est, sit amet rhoncus orci ultrices id. Sed id
              felis luctus, sodales sem eu, consectetur leo. Pellentesque
              molestie ut dolor ut tincidunt. Vestibulum mollis malesuada nibh.
              Suspendisse pharetra, elit at tristique molestie, lorem ex
              porttitor quam, sit amet ultrices lorem orci ut purus. Nullam nisi
              erat, finibus id erat nec, suscipit efficitur mi. Nam at gravida
              nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi cursus lectus sed metus finibus, sed gravida purus
              tristique. Ut cursus, est at varius placerat, velit velit finibus
              lorem, ac posuere nunc nulla non lacus. Sed hendrerit congue nunc.
              In volutpat aliquet nulla a maximus. In consequat rutrum ante, vel
              sodales nisl iaculis in. Maecenas eleifend euismod egestas. Morbi
              eleifend ligula ut posuere semper. Mauris ac interdum justo.
              Maecenas id nisi ut lacus pulvinar iaculis sit amet et elit.
              Vivamus accumsan lacinia libero efficitur feugiat. Integer vel
              pharetra ligula, eget fermentum metus. Donec urna sapien, tempus
              ultricies vehicula sed, fermentum eu justo. Nulla eleifend
              vestibulum tortor, id bibendum augue posuere in. Ut nec risus nec
              metus euismod imperdiet. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Phasellus tincidunt
              est nec dolor cursus, et viverra justo volutpat. Cras id eros non
              tellus molestie tincidunt in ut risus. Praesent quis magna neque.
              Vestibulum pulvinar diam ac urna porttitor, at facilisis nisl
              efficitur. Maecenas nec tortor ornare, dictum sem ac, mollis orci.
              Suspendisse neque eros, ultrices in mi vel, suscipit fermentum
              sem. Fusce lacinia risus ac scelerisque fermentum. Quisque non
              enim euismod, efficitur turpis vel, lacinia metus. Ut tellus
              lorem, facilisis eu egestas eget, viverra gravida leo. Nulla sit
              amet sem elementum, lobortis purus quis, varius sem. Duis
              elementum in libero in rutrum. Curabitur tincidunt commodo lorem
              sit amet blandit. Proin vel neque nec felis viverra fringilla quis
              vitae diam. Suspendisse sagittis molestie mi. Nullam a sem nec
              arcu dictum venenatis. Donec vitae massa id massa suscipit semper.
              Morbi et faucibus ante, dignissim lobortis arcu. Duis elementum
              euismod nulla, nec maximus justo fringilla vitae. Cras lectus
              nisl, condimentum sit amet fermentum non, tristique non sem. Duis
              mollis diam diam, a facilisis justo mollis ultrices. Pellentesque
              pharetra dignissim pulvinar. Curabitur blandit vestibulum diam,
              porttitor dapibus justo vulputate sed. Curabitur sagittis libero
              sit amet fringilla lacinia. Proin elit nulla, dapibus vitae
              feugiat placerat, egestas egestas leo. Donec pulvinar nulla
              tristique, faucibus diam ut, vehicula mi. Praesent auctor ante
              quis turpis faucibus efficitur ut sit amet diam. Sed sed egestas
              neque, eu vehicula sem. Pellentesque eget lorem in velit viverra
              semper. Ut at quam gravida, ullamcorper lorem eget, sodales quam.
              Suspendisse dolor velit, porttitor dapibus pretium et, rutrum in
              nulla. Praesent volutpat orci leo, sed rutrum dui euismod sit
              amet. Mauris sed metus mauris. Suspendisse dignissim ex id odio
              malesuada, sed ornare elit dignissim. Fusce vestibulum mi sit amet
              maximus tempor. Nam quam nunc, pulvinar et dui ac, viverra
              vulputate enim. Donec interdum odio et ornare rutrum. Nunc nulla
              massa, tincidunt nec augue sed, rutrum volutpat tellus. In egestas
              sodales magna, at vestibulum magna porta nec. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Cras vehicula commodo est, sit amet rhoncus orci ultrices
              id. Sed id felis luctus, sodales sem eu, consectetur leo.
              Pellentesque molestie ut dolor ut tincidunt. Vestibulum mollis
              malesuada nibh. Suspendisse pharetra, elit at tristique molestie,
              lorem ex porttitor quam, sit amet ultrices lorem orci ut purus.
              Nullam nisi erat, finibus id erat nec, suscipit efficitur mi. Nam
              at gravida nibh. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi cursus lectus sed metus finibus, sed
              gravida purus tristique. Ut cursus, est at varius placerat, velit
              velit finibus lorem, ac posuere nunc nulla non lacus. Sed
              hendrerit congue nunc. In volutpat aliquet nulla a maximus. In
              consequat rutrum ante, vel sodales nisl iaculis in. Maecenas
              eleifend euismod egestas. Morbi eleifend ligula ut posuere semper.
              Mauris ac interdum justo. Maecenas id nisi ut lacus pulvinar
              iaculis sit amet et elit. Vivamus accumsan lacinia libero
              efficitur feugiat. Integer vel pharetra ligula, eget fermentum
              metus. Donec urna sapien, tempus ultricies vehicula sed, fermentum
              eu justo. Nulla eleifend vestibulum tortor, id bibendum augue
              posuere in. Ut nec risus nec metus euismod imperdiet. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Phasellus tincidunt est nec dolor cursus, et
              viverra justo volutpat. Cras id eros non tellus molestie tincidunt
              in ut risus. Praesent quis magna neque. Vestibulum pulvinar diam
              ac urna porttitor, at facilisis nisl efficitur. Maecenas nec
              tortor ornare, dictum sem ac, mollis orci. Suspendisse neque eros,
              ultrices in mi vel, suscipit fermentum sem. Fusce lacinia risus ac
              scelerisque fermentum. Quisque non enim euismod, efficitur turpis
              vel, lacinia metus. Ut tellus lorem, facilisis eu egestas eget,
              viverra gravida leo. Nulla sit amet sem elementum, lobortis purus
              quis, varius sem. Duis elementum in libero in rutrum. Curabitur
              tincidunt commodo lorem sit amet blandit. Proin vel neque nec
              felis viverra fringilla quis vitae diam. Suspendisse sagittis
              molestie mi. Nullam a sem nec arcu dictum venenatis. Donec vitae
              massa id massa suscipit semper. Morbi et faucibus ante, dignissim
              lobortis arcu. Duis elementum euismod nulla, nec maximus justo
              fringilla vitae. Cras lectus nisl, condimentum sit amet fermentum
              non, tristique non sem. Duis mollis diam diam, a facilisis justo
              mollis ultrices. Pellentesque pharetra dignissim pulvinar.
              Curabitur blandit vestibulum diam, porttitor dapibus justo
              vulputate sed. Curabitur sagittis libero sit amet fringilla
              lacinia. Proin elit nulla, dapibus vitae feugiat placerat, egestas
              egestas leo. Donec pulvinar nulla tristique, faucibus diam ut,
              vehicula mi. Praesent auctor ante quis turpis faucibus efficitur
              ut sit amet diam. Sed sed egestas neque, eu vehicula sem.
              Pellentesque eget lorem in velit viverra semper. Ut at quam
              gravida, ullamcorper lorem eget, sodales quam. Suspendisse dolor
              velit, porttitor dapibus pretium et, rutrum in nulla. Praesent
              volutpat orci leo, sed rutrum dui euismod sit amet. Mauris sed
              metus mauris. Suspendisse dignissim ex id odio malesuada, sed
              ornare elit dignissim. Fusce vestibulum mi sit amet maximus
              tempor. Nam quam nunc, pulvinar et dui ac, viverra vulputate enim.
              Donec interdum odio et ornare rutrum. Nunc nulla massa, tincidunt
              nec augue sed, rutrum volutpat tellus. In egestas sodales magna,
              at vestibulum magna porta nec. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras
              vehicula commodo est, sit amet rhoncus orci ultrices id. Sed id
              felis luctus, sodales sem eu, consectetur leo. Pellentesque
              molestie ut dolor ut tincidunt. Vestibulum mollis malesuada nibh.
              Suspendisse pharetra, elit at tristique molestie, lorem ex
              porttitor quam, sit amet ultrices lorem orci ut purus. Nullam nisi
              erat, finibus id erat nec, suscipit efficitur mi. Nam at gravida
              nibh.
            </div>
          </div>
        </MainContainerStyled> */}
        <Footer className="p-standard" />
      </LayoutContainerStyled>
    </>
  );
}

export default Index;
