import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import AreaChart from './AreaChart'
import DATA from './data'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  const data = DATA
  const title = 'Test area chart'

  root.render(
        <React.StrictMode>
            <AreaChart data={data} title={title} />
        </React.StrictMode>
  )
}
