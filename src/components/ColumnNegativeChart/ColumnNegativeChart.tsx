import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export default React.memo(ColumnNegativeChart)

interface ChartProps {
  data:object[]
  title?:string
  subtitle?:string
  series1Name?:string
  yAxisTitle?:string
  xAxisCategories:string[]
}

function ColumnNegativeChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      // type: 'column',
      // name: 'Year',
      // alignTicks: false
      backgroundColor: 'transparent'
    },
    title: {
      text: props.title
    },
    xAxis: {
      categories: props.xAxisCategories
    },
    series: [{
      type: 'column',
      name: props.series1Name,
      data: props.data,
      dataLabels: {
        enabled: true
      }
    }],
    yAxis: {
      title: {
        text: props.yAxisTitle
      },
      labels: {
        format: '{value:,.1f}%'
      }
    },
    credits: {
      enabled: false
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
