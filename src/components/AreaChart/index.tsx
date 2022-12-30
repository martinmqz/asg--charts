import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import AREA_CHART_DATA from './data'
import AreaChart from './AreaChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <AreaChart
        data={AREA_CHART_DATA}
        // title='Yield Premium above T-Bills'
      />
    </React.StrictMode>
  )
}
