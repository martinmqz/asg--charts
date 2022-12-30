import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import SplineSymbolsChart from './SplineSymbolsChart'
import SPLINE_SYMBOLS_CHART_DATA from './data'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <SplineSymbolsChart
        data1={SPLINE_SYMBOLS_CHART_DATA.russel3kGrowthIndexNTMEPS}
        data2={SPLINE_SYMBOLS_CHART_DATA.russel3kGrowthIndexNTMPE}
        dates={SPLINE_SYMBOLS_CHART_DATA.dates}
        series1Name='Russell 3000 Growth Index - NTM EPS'
        series2Name='Russell 3000 Growth Index - NTM P/E'
        title='Growth multiples have sharply compressed in 2022 despite rising earnings-per-share (EPS) estimates'
        yAxisTitle='Percent'
      />
    </React.StrictMode>
  )
}

export default SplineSymbolsChart
