import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ProfileIcon = React.memo(({color, ...props}: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    color={color}
    {...props}>
    <Path d="M16 16a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5ZM17 18h-2A11 11 0 0 0 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1 11 11 0 0 0-11-11ZM6.06 28A9 9 0 0 1 15 20h2a9 9 0 0 1 8.94 8Z" />
  </Svg>
));
