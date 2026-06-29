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
import { data } from "~consts/demo-data";
import './chart.css';
import { CustomActiveDot } from "~components/custom-active-dot";

export const Chart = () => {
  return (
    <ResponsiveContainer
      width="70%"
      height={340}
      className="chart-container"
    >
      <ComposedChart
        data={data}
        margin={{
          left: 10,
          right: 20,
          top: 40,
          bottom: -28,
        }}
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
          content={<CustomTooltip />}
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
          dataKey="roi"
          stroke="#169017"
          strokeWidth={6}
          dot={false}
          activeDot={<CustomActiveDot color="#1A8E15" />} 
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