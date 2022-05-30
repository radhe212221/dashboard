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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.375 5.67c.29-1.685 1.63-2.924 3.32-3.18C7.315 2.242 9.535 2 12 2c2.464 0 4.686.243 6.305.49 1.69.256 3.03 1.495 3.32 3.18C21.827 6.844 22 8.335 22 10s-.173 3.156-.375 4.33c-.29 1.685-1.63 2.923-3.32 3.18a42.899 42.899 0 0 1-5.68.485l-6.116 3.613A1 1 0 0 1 5 20.748v-3.404c-1.353-.45-2.375-1.567-2.625-3.014A25.7 25.7 0 0 1 2 10a25.7 25.7 0 0 1 .375-4.33ZM6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      fill="#AFB3BE"
    />
  </svg>
)

export default SvgComponent
