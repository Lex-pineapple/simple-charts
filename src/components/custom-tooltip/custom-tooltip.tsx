import type { TooltipProps } from "recharts";
import './custom-tooltip.css';

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const map = Object.fromEntries(
    payload.map((item) => [item.dataKey, item.value])
  );

  return (
    <div className="tooltip">
      <div className="tooltip-date">{label}</div>

      <div className="tooltip-row">
        <span
          className="bullet"
          style={{ background: "#FFE86B" }}
        />
        Cost:
        <strong>{map.cost}</strong>
      </div>

      <div className="tooltip-row">
        <span
          className="bullet"
          style={{ background: "#3A74FF" }}
        />
        CPA:
        <strong>{map.cpa}</strong>
      </div>

      <div className="tooltip-row">
        <span
          className="bullet"
          style={{ background: "#138A12" }}
        />
        ROI confirmed:
        <strong>{map.roi}</strong>
      </div>

      <div className="tooltip-row">
        <span
          className="bullet"
          style={{ background: "#A21AFB" }}
        />
        Conversions:
        <strong>{map.conversions}</strong>
      </div>
    </div>
  );
}