import * as React from "react";
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */ const SvgComponent =
  (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={165}
      height={177}
      fill="none"
      {...props}
    >
      <G filter="url(#a)" shapeRendering="crispEdges">
        <Path fill="url(#b)" d="M4 0h157v169H4z" />
        <Path fill="url(#c)" d="M4 0h157v169H4z" />
        <Path fill="url(#d)" d="M4 0h157v169H4z" />
        <Path fill="url(#e)" d="M4 0h157v169H4z" />
      </G>
      <Defs>
        <Pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#f" transform="matrix(.001 0 0 .00093 -.038 0)" />
        </Pattern>
        <Pattern
          id="c"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#f" transform="matrix(.001 0 0 .00093 -.038 0)" />
        </Pattern>
        <Pattern
          id="d"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#f" transform="matrix(.001 0 0 .00093 -.038 0)" />
        </Pattern>
        <Pattern
          id="e"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#f" transform="matrix(.001 0 0 .00093 -.038 0)" />
        </Pattern>
        <Image
          id="f"
          width={1080}
          height={1080}
        />
      </Defs>
    </Svg>
  );
export default SvgComponent;