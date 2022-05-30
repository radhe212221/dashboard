import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={110}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} y={0.5} width={29} height={29} rx={8.5} stroke="#F2F2F2" />
    <path
      d="M22.205 15.007a.8.8 0 0 0-.8.8v4.802a.8.8 0 0 1-.8.8H9.4a.8.8 0 0 1-.8-.8V9.405a.8.8 0 0 1 .8-.8h4.801a.8.8 0 1 0 0-1.6H9.401A2.4 2.4 0 0 0 7 9.405V20.61a2.4 2.4 0 0 0 2.4 2.401h11.205a2.4 2.4 0 0 0 2.4-2.4v-4.802a.8.8 0 0 0-.8-.8Zm-12.004.609v3.393a.8.8 0 0 0 .8.8h3.394a.799.799 0 0 0 .568-.232L20.5 14.03l2.273-2.225a.8.8 0 0 0 0-1.136L19.38 7.237a.8.8 0 0 0-1.136 0L15.987 9.5l-5.554 5.546a.801.801 0 0 0-.232.569Zm8.611-6.683 2.265 2.265-1.137 1.136-2.264-2.264 1.136-1.137Zm-7.01 7.01 4.745-4.745 2.265 2.265-4.746 4.745h-2.264v-2.264Z"
      fill="#8146FF"
    />
    <rect x={80.5} y={0.5} width={29} height={29} rx={8.5} stroke="#F2F2F2" />
    <path
      d="M93.6 19.8a.8.8 0 0 0 .8-.8v-4.8a.8.8 0 1 0-1.6 0V19a.8.8 0 0 0 .8.8Zm8-9.6h-3.2v-.8A2.4 2.4 0 0 0 96 7h-1.6A2.4 2.4 0 0 0 92 9.4v.8h-3.2a.8.8 0 1 0 0 1.6h.8v8.8A2.4 2.4 0 0 0 92 23h6.4a2.4 2.4 0 0 0 2.4-2.4v-8.8h.8a.801.801 0 0 0 0-1.6Zm-8-.8a.8.8 0 0 1 .8-.8H96a.8.8 0 0 1 .8.8v.8h-3.2v-.8Zm5.6 11.2a.8.8 0 0 1-.8.8H92a.8.8 0 0 1-.8-.8v-8.8h8v8.8Zm-2.4-.8a.8.8 0 0 0 .8-.8v-4.8a.8.8 0 1 0-1.6 0V19a.8.8 0 0 0 .8.8Z"
      fill="#F26E6E"
    />
    <rect x={40.5} y={0.5} width={29} height={29} rx={8.5} stroke="#F2F2F2" />
    <path
      d="M57.917 15.573a4.8 4.8 0 1 0-5.936 0 8.001 8.001 0 0 0-4.976 6.544.807.807 0 0 0 .712.888.805.805 0 0 0 .888-.712 6.4 6.4 0 0 1 12.72 0 .8.8 0 0 0 .8.712h.089a.8.8 0 0 0 .704-.88 8 8 0 0 0-5-6.552Zm-2.968-.568a3.2 3.2 0 1 1 0-6.401 3.2 3.2 0 0 1 0 6.4Z"
      fill="#8146FF"
    />
  </svg>
)

export default SvgComponent
