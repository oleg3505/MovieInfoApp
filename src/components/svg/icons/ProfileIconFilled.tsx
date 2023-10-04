import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

export const ProfileIconFilled = React.memo(({...props}: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#fcfcfc"
    stroke="#fcfcfc"
    viewBox="-6.4 -6.4 44.8 44.8"
    {...props}>
    <Rect
      width={44.8}
      height={44.8}
      x={-6.4}
      y={-6.4}
      fill="#1C274D"
      stroke="none"
      strokeWidth={0}
      rx={22.4}
    />
    <Path d="M16 16a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5ZM17 18h-2A11 11 0 0 0 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1 11 11 0 0 0-11-11ZM6.06 28A9 9 0 0 1 15 20h2a9 9 0 0 1 8.94 8Z" />
  </Svg>
));
