import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const BookmarkIconFilled = React.memo((props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#1C274D"
      fillRule="evenodd"
      d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536c-.683-.684-1.562-1.048-2.785-1.242v9.609c0 .468 0 .851-.017 1.153-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881-.017-.302-.017-.685-.017-1.153v-9.61c-1.223.195-2.101.56-2.786 1.243ZM7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z"
      clipRule="evenodd"
    />
    <Path
      fill="#1C274D"
      d="M7.75 2.069v9.739c0 .496 0 .836.015 1.09.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358.015-.254.015-.594.015-1.09v-9.74C15.094 2 13.7 2 12 2c-1.7 0-3.094 0-4.25.069Z"
    />
  </Svg>
));
