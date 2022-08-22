import { useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  ContextContainer,
  Logo,
  Subtitle,
  BackgroundVideo,
} from '../../styles/showcase-points-video/showcase-points-video';
import { Controller, Scene } from 'react-scrollmagic';

import ShowcasePointsVideoPoints from './showcase-points-video-points';
import ShowcasePointsVideoResults from './showcase-points-video-results';
import ShowcasePointsVideoSocialLinks from './showcase-points-video-social-links';

const logoUrl = 'images/project-logos/foxx-gotuje-horizontal.png';
const backgroundVideoUrl = 'video/project-video-backgrounds/foxx-gotuje.mp4';

export const ShowcasePointsVideo = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  //Store
  const [progressValue, setProgressValue] = useState(0);

  //Refs
  const backgroundVideo = useRef<HTMLVideoElement>(null);

  //Others
  let videoDuration = 7.8;
  let pixelsScroll = 5000;
  let playRatio = pixelsScroll / videoDuration / 100;

  useEffect(() => {
    if (backgroundVideo.current) {
      backgroundVideo.current.currentTime = progressValue;
    }
  }, [progressValue]);

  return (
    <Controller>
      <Scene duration={pixelsScroll} pin={true} reverse={true} triggerHook={0}>
        {(progress: number) => {
          setProgressValue(progress * playRatio);

          return (
            <Wrapper id={id}>
              <ContextContainer>
                <Logo src={logoUrl} />
                <Subtitle>Kanał kulinarny o świrowaniu</Subtitle>
                <ShowcasePointsVideoPoints />
                <ShowcasePointsVideoResults />
                <ShowcasePointsVideoSocialLinks />
              </ContextContainer>
              <BackgroundVideo
                muted
                ref={backgroundVideo}
                src={backgroundVideoUrl}
              />
            </Wrapper>
          );
        }}
      </Scene>
    </Controller>
  );
};

export default ShowcasePointsVideo;
