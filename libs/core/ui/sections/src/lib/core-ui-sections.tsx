import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoreUiSectionsProps {}

const StyledCoreUiSections = styled.div`
  color: pink;
`;

export function CoreUiSections(props: CoreUiSectionsProps) {
  return (
    <StyledCoreUiSections>
      <h1>Welcome to CoreUiSections!</h1>
    </StyledCoreUiSections>
  );
}

export default CoreUiSections;
