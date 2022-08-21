import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import {
  Wrapper,
  Info,
  Logo,
  HoverInfo,
  Text,
  Button,
  ContentOverlay,
  Video,
} from '../../styles/showcase-gallery/showcase-gallery-item';

export const ShowcaseGalleryItem = ({
  className,
  logoUrl,
  descriptionText,
  buttonText,
  buttonUrl,
  backgroundUrl,
  videoUrl,
}: {
  className?: string;
  logoUrl?: string;
  descriptionText?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundUrl?: string;
  videoUrl?: string;
}) => {
  //Refs
  const wrapper = useRef<HTMLDivElement>(null);
  const hoverInfo = useRef<HTMLDivElement>(null);
  const contentOverlay = useRef<HTMLImageElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  //Timelines
  const hoverInfoTimeline = gsap.timeline().pause();
  const wrapperTimeline = gsap.timeline().pause();
  const contentOverlayTimeline = gsap.timeline().pause();

  //Component init
  useEffect(() => {
    animationsPrepare();
    addListeners();

    return () => {
      removeListeners();
    };
  }, []);

  //Listeners
  const addListeners = () => {
    if (wrapper.current) {
      wrapper.current.addEventListener('mouseover', onTileMouseOver);
      wrapper.current.addEventListener('mouseleave', onTileMouseLeave);
    }
  };

  const removeListeners = () => {
    wrapper.current?.addEventListener('mouseover', onTileMouseOver);
    wrapper.current?.addEventListener('mouseleave', onTileMouseLeave);
  };

  //Animations
  const animationsPrepare = () => {
    hoverInfoTimeline.to(hoverInfo.current, {
      height: 'auto',
      duration: 0.25,
      ease: 'none',
    });
    hoverInfoTimeline.to(hoverInfo.current, {
      opacity: 1,
      duration: 0.25,
      ease: 'none',
    });

    wrapperTimeline.to(wrapper.current, {
      filter: 'grayscale(0)',
      duration: 0.25,
      ease: 'none',
    });

    contentOverlayTimeline.to(contentOverlay.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'none',
    });
  };

  //Event handlers
  const onTileMouseOver = () => {
    if (video.current) {
      video.current.loop = true;
      video.current.play();
    }

    hoverInfoTimeline.play();
    wrapperTimeline.play();
    contentOverlayTimeline.play();
  };

  const onTileMouseLeave = () => {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
    }

    hoverInfoTimeline.reverse();
    wrapperTimeline.reverse();
    contentOverlayTimeline.reverse();
  };

  //Output
  return (
    <Wrapper ref={wrapper}>
      <Info>
        <Logo src={logoUrl} />
        <HoverInfo ref={hoverInfo}>
          <Text>{descriptionText}</Text>
          <Button href={buttonUrl}>{buttonText}</Button>
        </HoverInfo>
      </Info>
      <ContentOverlay ref={contentOverlay} src={backgroundUrl} />
      <Video ref={video} muted src={videoUrl} />
    </Wrapper>
  );
};

export default ShowcaseGalleryItem;
