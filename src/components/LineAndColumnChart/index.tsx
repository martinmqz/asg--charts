import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import LINE_AND_COLUMN_CHART_DATA from './data'
import LineAndColumnChart from './LineAndColumnChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  const chartContent = LINE_AND_COLUMN_CHART_DATA

  root.render(
    <React.StrictMode>
      <LineAndColumnChart
        title='Growth & Inflation'
        categories={chartContent.categories}
        series1Data={chartContent.series1Data}
        series2Data={chartContent.series2Data}
      />
    </React.StrictMode>
  )
}
