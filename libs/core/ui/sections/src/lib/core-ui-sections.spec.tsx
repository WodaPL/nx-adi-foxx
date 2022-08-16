import { render } from '@testing-library/react';

import CoreUiSections from './core-ui-sections';

describe('CoreUiSections', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreUiSections />);
    expect(baseElement).toBeTruthy();
  });
});
