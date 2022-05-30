import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.405 18.05a1.85 1.85 0 0 0 1.851-1.851H5.554a1.85 1.85 0 0 0 1.851 1.851Zm5.554-5.554V7.868c0-2.846-1.513-5.22-4.165-5.85v-.63C8.794.62 8.174 0 7.405 0c-.768 0-1.388.62-1.388 1.388v.63c-2.652.63-4.166 3.004-4.166 5.85v4.628L0 14.347v.926h14.81v-.926l-1.851-1.85Z"
      fill="#9B9FAB"
    />
  </svg>
)

export default SvgComponent
