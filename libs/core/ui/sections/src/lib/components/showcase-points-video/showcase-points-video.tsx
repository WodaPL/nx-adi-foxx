import {
  Wrapper,
  ContextContainer,
  Logo,
  Subtitle,
  BackgroundWrapper,
  Background,
} from '../../styles/showcase-points-video/showcase-points-video';

import ShowcasePointsVideoPoints from './showcase-points-video-points';
import ShowcasePointsVideoResults from './showcase-points-video-results';
import ShowcasePointsVideoSocialLinks from './showcase-points-video-social-links';

const logoUrl = 'images/project-logos/foxx-gotuje-horizontal.png';
const backgroundUrl =
  'images/project-backgrounds/foxx-gotuje-points-background.png';

export const ShowcasePointsVideo = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  return (
    <Wrapper id={id}>
      <ContextContainer>
        <Logo src={logoUrl} />
        <Subtitle>Kanał kulinarny o świrowaniu</Subtitle>
        <ShowcasePointsVideoPoints />
        <ShowcasePointsVideoResults />
        <ShowcasePointsVideoSocialLinks />
      </ContextContainer>
      <BackgroundWrapper>
        <Background src={backgroundUrl}></Background>
      </BackgroundWrapper>
    </Wrapper>
  );
};

export default ShowcasePointsVideo;
