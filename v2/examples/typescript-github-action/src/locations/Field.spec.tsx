import React from 'react';
import { vi } from 'vitest';
import Field from './Field';
import { render } from '@testing-library/react';
import { mockCma, mockSdk } from '../../test/mocks';

vi.mock('@contentful/react-apps-toolkit', () => ({
  useSDK: () => mockSdk,
  useCMA: () => mockCma,
}));

describe('Field component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Field />);

    expect(getByText('Hello Entry Field Component (AppId: test-app)')).toBeInTheDocument();
  });
});
