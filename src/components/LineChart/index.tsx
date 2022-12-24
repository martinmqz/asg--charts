import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import LINE_CHART_DATA from './data'
import LineChart from './LineChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <LineChart
        data={LINE_CHART_DATA}
        title='U.S. 3 Month T-Bill'
      />
    </React.StrictMode>
  )
}
