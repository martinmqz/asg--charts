import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import LINE_TIME_SERIES_CHART_DATA from './data'
import LineTimeSeriesChart from './LineTimeSeriesChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)

  root.render(
    <React.StrictMode>
      <LineTimeSeriesChart
        data={LINE_TIME_SERIES_CHART_DATA}
        title='T-BILL YIELDS SURGED HIGHER IN 2022'
        yAxisTitle='Yield (%)'
      />
      Source: Bloomberg, as of 5-Dec-22; U.S. 3-month T-bill (USGG3M Index)
    </React.StrictMode>
  )
}
