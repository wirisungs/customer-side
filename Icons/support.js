import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill || "#1c1c1c"}
      fillRule="evenodd"
      d="M8 .286c-1.74 0-3.443.091-5.074.263A2.658 2.658 0 0 0 .554 2.802a26.733 26.733 0 0 0-.011 7.475c.182 1.304 1.275 2.23 2.534 2.348l.249.023.257.023v2.473a.571.571 0 0 0 .804.521c1.606-.72 2.578-1.42 3.749-2.731A49.546 49.546 0 0 0 13 12.666a2.727 2.727 0 0 0 2.435-2.323 26.64 26.64 0 0 0 .28-3.733c0-1.291-.1-2.557-.274-3.772A2.69 2.69 0 0 0 13.04.552 48.83 48.83 0 0 0 8 .286Zm.195 3.62a1.015 1.015 0 0 0-1.193.979.714.714 0 0 1-1.428 0c0-1.515 1.416-2.676 2.9-2.381.949.189 1.718.96 1.907 1.906.094.477.04.93-.167 1.336-.2.393-.517.694-.865.926-.316.211-.486.336-.586.439a.455.455 0 0 0-.048.06.714.714 0 0 1-1.428-.004c0-.446.195-.784.447-1.046.225-.233.53-.441.821-.636.215-.144.33-.276.386-.387a.597.597 0 0 0 .038-.409 1.03 1.03 0 0 0-.784-.784Zm.52 5.877a.714.714 0 1 0-1.43 0v.314a.714.714 0 1 0 1.43 0v-.314Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;