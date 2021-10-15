import 'react-native';
import React from 'react';

import Label from '../src/components/Label';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const rendered = render(<Label />);
  rendered.getAllByText('test');
});

it('2 text nodes', () => {
  const rendered = render(<Label />);
  expect(rendered.getAllByA11yRole("Text")).toHaveLength(1);
});
