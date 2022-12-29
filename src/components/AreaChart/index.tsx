import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import LINE_CHART_DATA from './data'
import ColumnChart from './AreaChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <ColumnChart
        data={LINE_CHART_DATA}
        title='Yield Premium above T-Bills'
      />
    </React.StrictMode>
  )
}
