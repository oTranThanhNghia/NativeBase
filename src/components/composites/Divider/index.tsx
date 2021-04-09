import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from './../../primitives/Box';
import type { IDividerProps } from './types';
import { extractInObject } from '../../../theme/tools';

const Divider = (props: IDividerProps, ref?: any) => {
  const { orientation, ...newProps } = useThemeProps('Divider', props);
  const [, remainingProps] = extractInObject(newProps, ['size']);
  return (
    <Box
      {...remainingProps}
      ref={ref}
      aria-orientation={orientation}
      //@ts-ignore web only role
      accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
    />
  );
};

export default React.memo(React.forwardRef(Divider));
export type { IDividerProps };
