type TCustomDot = {
  cx: number;
  cy: number;
  type: 'yellow' | "purple" | 'blue' | 'green';
}

const DotData = {
  yellow: {
    fill: '#FFF1A3',
    stroke: "#FFF",
    strokeWidth: 2,
    r: 5 
  },
  purple: {
    width: 10,
    height: 10,
    fill: "#A61AF8",
    stroke: "white",
    strokeWidth: 2,
  },
  blue: {
    r: 6,
    fill: "#3772FF",
    stroke: "white",
    strokeWidth: 2,
  },
  green: {
    r: 5,
    fill: "#1A8E15",
    stroke: "white",
    strokeWidth: 2,
  }
}

export const CustomDot = ({cx, cy, type}: TCustomDot) => {
  if (type === 'purple') return (<rect
    x={cx - 5}
    y={cy - 5}
    width={10}
    height={10}
    fill="#A61AF8"
    stroke="white"
    strokeWidth={2}
  />)
  return <circle
    cx={cx}
    cy={cy}
    {...DotData[type]}
  />
}