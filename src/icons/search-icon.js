import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.615 12.888a7.2 7.2 0 1 1 1.273-1.273l4.848 4.849a.9.9 0 1 1-1.272 1.272l-4.849-4.848ZM12.6 7.2a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0Z"
      fill="#9AA0A8"
    />
  </svg>
)

export default SvgComponent
