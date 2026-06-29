type TCustomActiveDot = {
  color: string;
  cx?: number;
  cy?: number;
  stroke?: string;
}

export const CustomActiveDot = ({ cx = 0, cy = 0, stroke = '1px solid white', color }: TCustomActiveDot) => {

  return (
    <g>
      <circle cx={cx} cy={cy} r={20} fill={color} opacity={0.18} />
      <circle cx={cx} cy={cy} r={4} fill={color} stroke={stroke} strokeWidth={2} />
    </g>
  );
};