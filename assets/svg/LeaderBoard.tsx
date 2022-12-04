import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const LeaderBoard = props => (
  <Svg width={94} height={110} viewBox="0 0 94 110" fill="none" {...props}>
    <G filter="url(#filter0_d_33_15)">
      <Path
        d="M61.3951 78.9629C61.3951 76.2014 63.6336 73.9629 66.3951 73.9629H84C86.7614 73.9629 89 76.2014 89 78.9629V105H61.3951V78.9629Z"
        fill="url(#paint0_linear_33_15)"
      />
    </G>
    <G filter="url(#filter1_d_33_15)">
      <Path
        d="M3 60.3405C3 57.5791 5.23858 55.3405 8 55.3405H25.6049C28.3664 55.3405 30.6049 57.5791 30.6049 60.3405V105H3V60.3405Z"
        fill="url(#paint1_linear_33_15)"
      />
    </G>
    <G filter="url(#filter2_d_33_15)">
      <Path
        d="M31.6667 37.58C31.6667 34.8186 33.9052 32.58 36.6667 32.58H55.3333C58.0948 32.58 60.3333 34.8186 60.3333 37.58V105H31.6667V37.58Z"
        fill="url(#paint2_linear_33_15)"
      />
    </G>
    <G filter="url(#filter3_d_33_15)">
      <Path
        d="M44.8831 3L48.5191 13.2196H60.2853L50.7662 19.5357L54.4022 29.7554L44.8831 23.4393L35.3641 29.7554L39 19.5357L29.481 13.2196H41.2472L44.8831 3Z"
        fill="#FFDE0F"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_33_15"
        x1={75.1975}
        y1={73.9629}
        x2={75.1975}
        y2={105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE1DBC" />
        <Stop offset={1} stopColor="#E227F2" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_33_15"
        x1={16.8025}
        y1={55.3405}
        x2={16.8025}
        y2={105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#17D2F9" />
        <Stop offset={1} stopColor="#03FFE0" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_33_15"
        x1={46}
        y1={32.58}
        x2={46}
        y2={105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFDE0F" />
        <Stop offset={1} stopColor="#FF820F" stopOpacity={0.97} />
      </LinearGradient>
    </Defs>
  </Svg>
);
