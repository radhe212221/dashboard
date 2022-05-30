import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={11} fill="#AFB3BE" />
    <path
      d="m17.32 15.824-.962.962s-2.5 1.072-6.072-2.5-2.5-6.072-2.5-6.072l.962-.962a1.01 1.01 0 0 1 1.523.108l.918 1.225a1.01 1.01 0 0 1-.094 1.32l-.809.81s0 .714 1.429 2.142c1.429 1.43 2.143 1.43 2.143 1.43l.81-.81a1.01 1.01 0 0 1 1.32-.094l1.224.919a1.01 1.01 0 0 1 .108 1.522Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
