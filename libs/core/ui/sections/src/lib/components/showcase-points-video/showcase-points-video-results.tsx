import { ProjectResult } from '@adi-foxx/core/models';
import {
  Wrapper,
  Title,
  ResultsContainer,
  ResultTypeContainer,
  Icon,
  Result,
} from '../../styles/showcase-points-video/showcase-points-video-results';

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
      result: '2000',
    },
    {
      id: 'views',
      iconUrl: 'images/common-icons/view.png',
      result: '2000',
    },
  ];

  const results = resultsData.map((item) => (
    <ResultTypeContainer key={item.id}>
      <Icon src={item.iconUrl} />
      <Result>{item.result}</Result>
    </ResultTypeContainer>
  ));

  return (
    <Wrapper id={id}>
      <Title>Zasięgi</Title>
      <ResultsContainer>{results}</ResultsContainer>
    </Wrapper>
  );
};

export default ShowcasePointsVideoResults;
