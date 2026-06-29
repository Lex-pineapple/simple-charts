import { Chart } from "~components/chart"
import { combineByDate, type DataPoint } from "~consts/demo-data"

type TChartWithData = {
  data: Record<string, DataPoint[]>;
  legends: Record<string, string>;
}

export const ChartWithData = ({data, legends}: TChartWithData) => {
  return <Chart data={combineByDate(data)} legends={legends}/>
}