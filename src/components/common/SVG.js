// ******* THIS IS CURRENTLY UNUSED ********

import React from "react";
import styled from "styled-components";

const getPath = (name, props) => {
  switch (name) {
    case "wave1":
      return (
        <path
          {...props}
          d="M189,25.3536235 L1629,25.3536235 L1629,97.2793887 C1547.29542,104.171484 1390.08695,53.8328112 1274.60749,46.7381096 C1138.46867,38.3741607 1006.62552,77.1983814 848.708337,68.8344325 C690.791152,60.4704836 654.101351,39.0057356 523.7457,52.7381096 C417.268954,63.9549498 330.628142,82.3415394 189,87.9742042 L189,25.3536235 Z"
          id="top-wave"
          transform="translate(909.000000, 61.639694) scale(-1, -1) translate(-909.000000, -61.639694)"
        />
      );
    case "wave2":
      return (
        <path
          {...props}
          d="M0.981048045,35.392459 L1440.98105,35.392459 L1440.98105,85.8515303 C1360.83155,85.3623206 1263.83771,77.9345521 1188.09683,68.1983097 C1055.47746,51.1505248 932.315194,66.7399889 777.658576,61.6827922 C623.001959,56.6255955 597.428194,48.3224223 460.357389,48.3224223 C323.286583,48.3224223 232.040939,73.2555064 28.6648474,73.2555064 C18.617224,73.2555064 9.06227489,73.2098645 -7.95807864e-13,73.1185806 L0.981048045,35.392459 Z"
          id="bottom-wave"
          transform="translate(720.490524, 60.621995) scale(-1, -1) translate(-720.490524, -60.621995) "
        />
      );
    default:
      return <path />;
  }
};

const SVGElement = styled.svg`
  margin-bottom: 0;
  height: 8rem;
  width: 100%;
`;

const SVG = ({
  name = "",
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  viewBox = "0 0 1500 100"
}) => (
  <SVGElement
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </SVGElement>
);

export default SVG;

// component from https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
