import merge from 'lodash/merge';
import { Theme } from '@mui/material/styles';
//
import { defaultProps } from './default-props';

import { appBar } from './components/appbar';

export function componentsOverrides(theme: Theme) {
  const components = merge(defaultProps(theme), appBar(theme));

  return components;
}
