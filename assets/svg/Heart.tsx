import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const Heart = props => (
  <Svg
    width={48}
    height={45}
    viewBox="0 0 48 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_49_30)">
      <Path
        d="M13 3C7.47715 3 3 8.00467 3 14.1782C3 20.3518 23 40 23 40C23 40 43 20.3518 43 14.1782C43 8.00467 38.5228 3 33 3C27.4772 3 23 8.00467 23 14.1782C23 8.00467 18.5228 3 13 3Z"
        fill="url(#paint0_linear_49_30)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_49_30"
        x1={23}
        y1={3}
        x2={23}
        y2={40}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE1DBC" />
        <Stop offset={1} stopColor="#F90000" />
      </LinearGradient>
    </Defs>
  </Svg>
);
