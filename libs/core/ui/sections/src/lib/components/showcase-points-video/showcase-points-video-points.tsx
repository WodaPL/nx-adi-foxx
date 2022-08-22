import {
  Item,
  List,
  Wrapper,
} from '../../styles/showcase-points-video/showcase-points-video-points';

export const ShowcasePointsVideoPoints = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  const pointsData: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ];

  const points = pointsData.map((item) => <Item>{item}</Item>);

  return (
    <Wrapper id={id}>
      <List>{points}</List>
    </Wrapper>
  );
};

export default ShowcasePointsVideoPoints;
