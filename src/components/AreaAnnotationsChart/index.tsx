import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import AREA_ANNOTATIONS_CHART_DATA from './data'
import AreaAnnotationsChart from './AreaAnnotationsChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <AreaAnnotationsChart
        data={AREA_ANNOTATIONS_CHART_DATA}
        // title='Yield Premium above T-Bills'
      />
    </React.StrictMode>
  )
}
