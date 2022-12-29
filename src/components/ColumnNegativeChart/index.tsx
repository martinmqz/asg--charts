import React from 'react'
import ReactDOM from 'react-dom/client'
import consoleError from '../../_utils/console-error'
import COLUMN_NEGATIVE_CHART_DATA from './data'
import ColumnNegativeChart from './ColumnNegativeChart'
import Highcharts from 'highcharts'

const clientRoot = document.getElementById('root')
if (clientRoot === null) {
  consoleError('Root element not found')
} else {
  const root = ReactDOM.createRoot(clientRoot)
  root.render(
    <React.StrictMode>
      <ColumnNegativeChart
        data={COLUMN_NEGATIVE_CHART_DATA}
        series1Name='Momentum'
        title='For factors, 2022 was a year of two parts'
        yAxisTitle='Six-month return for each factor (%)'
        xAxisCategories={['Momentum', 'Dividend', 'Value', 'Momentum', 'Divident', 'Value']}
      />
    </React.StrictMode>
  )
}

Highcharts.theme = {
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
    '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
    backgroundColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1
      },
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(240, 240, 255)']
      ]
    }
  },
  title: {
    style: {
      color: '#000',
      font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  subtitle: {
    style: {
      color: '#666666',
      font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  legend: {
    itemStyle: {
      font: '9pt Trebuchet MS, Verdana, sans-serif',
      color: 'black'
    },
    itemHoverStyle: {
      color: 'gray'
    }
  }
}
Highcharts.setOptions(Highcharts.theme)

export default ColumnNegativeChart
