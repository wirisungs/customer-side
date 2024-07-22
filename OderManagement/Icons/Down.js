import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="-0.5 -0.5 12 12"
    {...props}
  >
    <Path
      fill="#ffffff"
      d="M5.5 6.92a.336.336 0 0 1-.126-.022.35.35 0 0 1-.115-.08L2.991 4.549a.317.317 0 0 1-.098-.246.358.358 0 0 1 .11-.247.336.336 0 0 1 .246-.103c.095 0 .177.034.246.103L5.5 6.073l2.017-2.017a.31.31 0 0 1 .24-.097c.092.004.172.04.241.109.069.068.103.15.103.246a.336.336 0 0 1-.103.246L5.741 6.818a.349.349 0 0 1-.115.08.336.336 0 0 1-.126.023Z"
    />
  </Svg>
)
export default SvgComponent