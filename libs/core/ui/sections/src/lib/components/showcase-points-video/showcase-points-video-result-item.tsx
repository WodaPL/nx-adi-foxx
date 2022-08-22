import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Wrapper,
  Icon,
  Result,
} from '../../styles/showcase-points-video/showcase-points-video-result-item';

export const ShowcasePointsVideoResultItem = ({
  id,
  className,
  iconUrl,
  result,
}: {
  id?: string;
  className?: string;
  iconUrl?: string;
  result?: number;
}) => {
  const resultRef = useRef<HTMLSpanElement>(null);
  const resultInnerValue = 0;

  useEffect(() => {
    gsap.to(resultRef.current, {
      innerText: result,
      snap: 'innerText',
      duration: 1.5,
    });
  }, []);

  return (
    <Wrapper id={id}>
      <Icon src={iconUrl} />
      <Result ref={resultRef}>{resultInnerValue}</Result>
    </Wrapper>
  );
};

export default ShowcasePointsVideoResultItem;
