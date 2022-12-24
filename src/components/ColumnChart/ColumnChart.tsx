import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import COLUMN_CHART_DATA from './data'

export default function ColumnChart (props:HighchartsReact.Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      // type: 'column',
      // name: 'Year',
      alignTicks: false
    },
    title: {
      text: props.title as string
    },
    legend: {
      // enabled: false
    },
    series: [{
      type: 'column',
      name: '',
      data: COLUMN_CHART_DATA
    }],
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Precent'
      }
    }
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
      {...props}
    />
  )
}
