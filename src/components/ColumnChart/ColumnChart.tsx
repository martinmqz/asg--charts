import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import COLUMN_CHART_DATA from './data'
export default React.memo(ColumnChart)

interface ChartProps {
  data:object[]
  title?:string
  subtitle?:string
  seriesName?:string
  yAxisTitle?:string
}

function ColumnChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      // type: 'column',
      // name: 'Year',
      alignTicks: false
    },
    title: {
      text: props.title
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
    />
  )
}
