import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { remToPx } from '@adi-foxx/core/helpers';
import { heights } from '@adi-foxx/core/ui/layout';

import {
  Wrapper,
  IconWrapper,
  Icon,
  Text,
} from '../../styles/showcase-gallery/showcase-gallery-scroll';

const mouseIconUrl = 'images/common-icons/mouse.png';

export const ShowcaseGalleryScroll = ({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) => {
  //Refs
  const wrapper = useRef<HTMLDivElement>(null);
  const icon = useRef<HTMLImageElement>(null);

  //Timelines
  const viewportExceededTimeline = gsap.timeline().pause();
  const iconTimeline = gsap.timeline().pause();

  //Others
  let actualHeightPx = 0;

  //Component init
  useEffect(() => {
    variablesPrepare();
    animationsPrepare();
    addListeners();

    onScroll();
    iconTimeline.play();

    return () => {
      removeListeners();
    };
  }, []);

  //Listeners
  const addListeners = () => {
    window.addEventListener('scroll', onScroll);
  };

  const removeListeners = () => {
    window.removeEventListener('scroll', onScroll);
  };

  //Variables
  const variablesPrepare = () => {
    actualHeightPx = remToPx(heights.navbarDesktop);
  };

  //Animations
  const animationsPrepare = () => {
    viewportExceededTimeline.to(wrapper.current, {
      opacity: 0,
      duration: 0.75,
      ease: 'none',
    });

    iconTimeline.to(icon.current, {
      bottom: '-25%',
      duration: 1.5,
      ease: 'power2',
      repeat: -1,
      yoyo: true,
      yoyoEase: 'none',
    });
  };

  //Event handlers
  const onScroll = () => {
    const viewportExceeded = window.pageYOffset >= actualHeightPx;

    if (viewportExceeded) {
      viewportExceededTimeline.play();
    } else {
      viewportExceededTimeline.reverse();
    }
  };

  //Output
  return (
    <Wrapper ref={wrapper}>
      <Text>{text}</Text>
      <IconWrapper>
        <Icon ref={icon} src={mouseIconUrl} />
      </IconWrapper>
    </Wrapper>
  );
};

export default ShowcaseGalleryScroll;
