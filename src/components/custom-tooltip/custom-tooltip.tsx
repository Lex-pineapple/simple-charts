import type { TooltipContentProps } from "recharts";
import './custom-tooltip.css';
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

type TCustomTooltip = {
  legends: Record<string, string>
}

const colors = ["#FFE86B", "#3A74FF", "#138A12", "#A21AFB"];

export const CustomTooltip = ({
  active,
  payload,
  label,
  legends
}: TooltipContentProps<ValueType, NameType> & TCustomTooltip) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="tooltip">
      <div className="tooltip-date">{label}</div>

      {payload.map((item, idx) => {
        return <div className="tooltip-row">
        <span
          className="bullet"
          style={{ background: colors[idx] }}
        />
        {legends[item.dataKey as keyof typeof legends]}:
        <strong>{item.value}</strong>
      </div>
      })}
    </div>
  );
}