import { render } from '@testing-library/react';

import CoreUiLayout from './core-ui-layout';

describe('CoreUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
