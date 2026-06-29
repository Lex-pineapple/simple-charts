import './App.css'
import { costInfo, cpaInfo, roiConfirmedInfo, conversionsInfo } from '~consts/demo-data'
import { ChartWithData } from '~components/chart-with-data'

function App() {

  return (
    <section className="main-wrapper">
      <div className='chart-wrapper'>
        <ChartWithData data={{
          cost: costInfo,
          cpa: cpaInfo,
          roi: roiConfirmedInfo,
          conversions: conversionsInfo,
        }} legends={{
          cost: "Cost",
          cpa: "CPA",
          roi: "ROI confirmed",
          conversions: "Conversions"
        }}/>
      </div>
    </section>
  )
}

export default App
