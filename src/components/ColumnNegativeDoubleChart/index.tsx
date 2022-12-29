import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import ColumnNegativeDoubleChart from './ColumnNegativeDoubleChart'
import COLUMN_NEGATIVE_DOUBLE_CHART_DATA from './data'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <ColumnNegativeDoubleChart
        data1={COLUMN_NEGATIVE_DOUBLE_CHART_DATA.momentum}
        data2={COLUMN_NEGATIVE_DOUBLE_CHART_DATA.dividend}
        data3={COLUMN_NEGATIVE_DOUBLE_CHART_DATA.value}
        series1Name='Momentum'
        series2Name='Dividend yield'
        series3Name='Value'
        title='For factors, 2022 was a year of two parts'
        yAxisTitle='Six-month return for each factor (%)'
        xAxisCategories={['First half of 2022', 'Second half of 2022']}
      />
    </React.StrictMode>
  )
}

export default ColumnNegativeDoubleChart
