import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export default React.memo(SplineSymbolsChart)

interface ChartProps {
  data1:(number|object)[][] // EPS
  data2:(number|object)[][] // PE
  dates: string[]
  title?:string
  subtitle?:string
  series1Name?:string
  series2Name?:string
  yAxisTitle?:string
}

function SplineSymbolsChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: props.title
    },
    subtitle: {
      text: props.subtitle
    },
    xAxis: {
      type: 'datetime',
      categories: props.dates,
      labels: {
        formatter: function () {
          const date = new Date(this.value)
          const splitDateStr = date.toDateString().split(' ')
          const fmtd = `${splitDateStr[2]}-${splitDateStr[1]}-${splitDateStr[3].substring(2)}`
          return fmtd
        }
      },
      tickInterval: 40, // divided by 10 = number of dates shown on axis
      accessibility: {
        description: 'Months of the year'
      }
    },
    yAxis: {
      title: {
        text: props.yAxisTitle
      },
      labels: {
        format: '{value:,.1f}%'
      }
    },
    tooltip: {
      // crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666',
          lineWidth: 1
        }
      }
    },
    series: [{
      type: 'spline',
      name: props.series1Name,
      marker: {
        symbol: 'square'
      },
      data: props.data1
    },
    {
      type: 'spline',
      name: props.series2Name,
      marker: {
        symbol: 'diamond'
      },
      data: props.data2
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
    />
  )
}
