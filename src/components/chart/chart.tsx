import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import { CustomDot } from "~components/custom-dot";
import { CustomTooltip } from "~components/custom-tooltip";
import './chart.css';
import { CustomActiveDot } from "~components/custom-active-dot";
import { useState } from "react";
import type { ChartData } from "recharts/types/state/chartDataSlice";

type TChart = {
  data: ChartData<unknown>;
  legends: Record<string, string>;
}

export const Chart = ({data, legends}: TChart) => {
  const [hoveredLine, setHoveredLine] = useState(false);
  const handleChartMouseMove = () => {
    setHoveredLine(true);
  };
  const handleChartMouseExit = () => {
    setHoveredLine(false);
  };
  return (
    <ResponsiveContainer
      width="70%"
      height={340}
      className="chart-container"
    >
      <ComposedChart
        data={data}
        onMouseEnter={handleChartMouseMove}
        onMouseLeave={handleChartMouseExit}
        margin={{
          left: 10,
          right: 20,
          top: 40,
          bottom: -28,
        }}
        style={{cursor: "pointer"}}
      >
        <XAxis
          dataKey="date"
          tick={false}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          hide
          yAxisId={1}
          domain={['dataMin', "dataMax"]}
        />
        <YAxis
        hide
          yAxisId={2}
          domain={[0, 100]}
        />
        <YAxis
          hide
          yAxisId={3}
          domain={['dataMin - 80', "dataMax"]}
        />
        <YAxis
          hide
          yAxisId={4}
          domain={['dataMin', "dataMax + 10"]}
        />
        <Tooltip
          content={<CustomTooltip active={false} payload={[]} coordinate={undefined} accessibilityLayer={false} activeIndex={undefined} legends={legends} />}
          cursor={false}
        />
        <Area
          yAxisId={1}
          dataKey="cost"
          fill="#FFF2B3"
          stroke="#FFE34C"
          strokeWidth={2}
          fillOpacity={1}
          activeDot={<CustomActiveDot color="#FFF1A3" />} 
        />

        <Bar
          yAxisId={2}
          dataKey="cpa"
          stroke="#3873FF"
          strokeWidth={3}
          barSize={20}
          fill="#3873FF"
        />

        <Line
          yAxisId={3}
          type="monotone"
          // strokeWidth={hoveredLine ? 8 : 2}
          dataKey="roi"
          stroke="#169017"
          dot={false}
          activeDot={<CustomActiveDot color="#1A8E15" />}
          className={`changing-line ${hoveredLine ? "wide" : "small"}`}
        />

        <Line
          yAxisId={4}
          dataKey="conversions"
          stroke="#A01CF8"
          strokeWidth={3}
          dot={<CustomDot cx={0} cy={0} type={"purple"} />}
          activeDot={{
            r: 20,
            fill: "rgba(160,28,248,.18)",
            stroke: "#A01CF8",
            strokeWidth: 0,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}