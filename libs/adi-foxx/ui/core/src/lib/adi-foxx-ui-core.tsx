import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AdiFoxxUiCoreProps {}

const StyledAdiFoxxUiCore = styled.div`
  color: pink;
`;

export function AdiFoxxUiCore(props: AdiFoxxUiCoreProps) {
  return (
    <StyledAdiFoxxUiCore>
      <h1>Welcome to AdiFoxxUiCore!</h1>
    </StyledAdiFoxxUiCore>
  );
}

export default AdiFoxxUiCore;
