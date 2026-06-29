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

export const Chart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={340}
    >
      <ComposedChart
        data={data}
        margin={{
          left: 10,
          right: 20,
          top: 20,
          bottom: 10,
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
          domain={['dataMin', "dataMax"]}
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
          dot={<CustomDot cx={0} cy={0} type={"yellow"} />}
          activeDot={{
            r: 16,
            fill: "rgb(255, 242, 179, .18)",
            stroke: "#169017",
            strokeWidth: 0,
          }}
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
          strokeWidth={3}
          dot={<CustomDot cx={0} cy={0} type={"green"} />}
          activeDot={{
            r: 16,
            fill: "rgba(22,144,23,.18)",
            stroke: "#169017",
            strokeWidth: 0,
          }}
        />

        <Line
          yAxisId={4}
          dataKey="conversions"
          stroke="#A01CF8"
          strokeWidth={3}
          dot={<CustomDot cx={0} cy={0} type={"purple"} />}
          activeDot={{
            r: 16,
            fill: "rgba(160,28,248,.18)",
            stroke: "#A01CF8",
            strokeWidth: 0,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}