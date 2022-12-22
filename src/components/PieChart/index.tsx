import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import PieChart from './PieChart'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  const options: Highcharts.Options = {
    title: {
      text: 'Test Pie Chart'
    },
    series: [{
      type: 'pie',
      data: [1, 2, 3]
    }]
  }
  root.render(
    <React.StrictMode>
      <PieChart options={options} />
    </React.StrictMode>
  )
}
