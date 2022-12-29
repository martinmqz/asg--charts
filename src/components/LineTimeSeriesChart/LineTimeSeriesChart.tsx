import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
export default React.memo(LineTimeSeriesChart)

interface ChartProps {
  data:number[][]
  title?:string
  subtitle?:string
  seriesName?:string
  yAxisTitle?:string
}
function LineTimeSeriesChart (props:ChartProps) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const ChartOptions:Highcharts.Options = {
    title: {
      text: props.title
    },
    subtitle: {
      text: props.subtitle ?? (document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in')
    },
    xAxis: { type: 'datetime' },
    yAxis: { title: { text: props.yAxisTitle } },
    legend: { enabled: false },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors?.[0] as string],
            [1, Highcharts.color(Highcharts.getOptions().colors?.[0] as string).setOpacity(0).get('rgba') as string]
          ]
        },
        marker: { radius: 2 },
        lineWidth: 1,
        states: {
          hover: { lineWidth: 1 }
        },
        threshold: null

      }
    },
    series: [{
      type: 'area',
      name: props.seriesName,
      data: props.data
    }],
    credits: {
      enabled: false
    }

  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      ref={chartRef}
      options={ChartOptions}
    />
  )
}
