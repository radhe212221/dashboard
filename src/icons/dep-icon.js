import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.474 3h17.999c.261 0 .473.262.473.474v1.894a.474.474 0 0 1-.473.474h-18c-.26 0-.473-.261-.473-.474V3.474C3 3.212 3.212 3 3.474 3ZM3.474 19.105h17.999c.261 0 .473.262.473.474v.947a.474.474 0 0 1-.473.474h-18C3.214 21 3 20.74 3 20.526v-.947c0-.261.212-.474.474-.474ZM9.625 12.47h5.684v5.685H9.625V12.47Z"
      fill="#C4C4C4"
    />
    <path
      d="M20.999 18.157V7.263a.474.474 0 0 0-.474-.474H4.421a.474.474 0 0 0-.474.474v10.894h4.737v-6.158c0-.261.212-.473.474-.473h6.631a.474.474 0 0 1 .474.473v6.158h4.736Z"
      fill="#C4C4C4"
    />
  </svg>
)

export default SvgComponent
