import { render } from '@testing-library/react';

import AdiFoxxUiCore from './adi-foxx-ui-core';

describe('AdiFoxxUiCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdiFoxxUiCore />);
    expect(baseElement).toBeTruthy();
  });
});
