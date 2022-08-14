import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoreUiLayoutProps {}

const StyledCoreUiLayout = styled.div`
  color: pink;
`;

export function CoreUiLayout(props: CoreUiLayoutProps) {
  return (
    <StyledCoreUiLayout>
      <h1>Welcome to CoreUiLayout!</h1>
    </StyledCoreUiLayout>
  );
}

export default CoreUiLayout;
