import { ProjectResult } from '@adi-foxx/core/models';
import {
  Wrapper,
  Title,
  ResultsContainer,
} from '../../styles/showcase-points-video/showcase-points-video-results';
import ShowcasePointsVideoResultItem from './showcase-points-video-result-item';

export const ShowcasePointsVideoResults = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  const resultsData: ProjectResult[] = [
    {
      id: 'subscribers',
      iconUrl: 'images/common-icons/user-add.png',
      result: 2000,
    },
    {
      id: 'views',
      iconUrl: 'images/common-icons/view.png',
      result: 2000,
    },
  ];

  const results = resultsData.map((item) => (
    <ShowcasePointsVideoResultItem
      key={item.id}
      iconUrl={item.iconUrl}
      result={item.result}
    />
  ));

  return (
    <Wrapper id={id}>
      <Title>Zasięgi</Title>
      <ResultsContainer>{results}</ResultsContainer>
    </Wrapper>
  );
};

export default ShowcasePointsVideoResults;
