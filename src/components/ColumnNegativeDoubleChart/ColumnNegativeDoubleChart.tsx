import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export default React.memo(ColumnNegativeDoubleChart)

interface ChartProps {
  data1:number[]
  data2:number[]
  data3:number[]
  title?:string
  subtitle?:string
  series1Name?:string
  series2Name?:string
  series3Name?:string
  yAxisTitle?:string
  xAxisCategories:string[]
}

function ColumnNegativeDoubleChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      className: 'column-double-chart'
    },
    title: {
      text: props.title
    },
    legend: {
      symbolRadius: 0
      // symbolWidth: 2
      // symbolHeight: 2
    },
    xAxis: {
      categories: props.xAxisCategories
    },
    yAxis: {
      title: {
        text: props.yAxisTitle
      },
      labels: {
        format: '{value:,.1f}%'
      }
    },
    series: [{
      type: 'column',
      name: props.series1Name,
      data: props.data1,
      dataLabels: {
        enabled: true
      }
    },
    {
      type: 'column',
      name: props.series2Name,
      data: props.data2,
      dataLabels: {
        enabled: true
      }
    },
    {
      type: 'column',
      name: props.series3Name,
      data: props.data3,
      dataLabels: {
        enabled: true
      }
    }],
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
