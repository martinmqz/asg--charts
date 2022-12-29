import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
export default React.memo(LineAndColumnChart)

interface Props {
  title:string
  categories:string[]
  series1Data:number[]
  series2Data:number[]
}

function LineAndColumnChart (props:Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    title: {
      text: props.title,
      align: 'left'
    },
    subtitle: {
      text: 'subtitle'
    },
    xAxis: [{
      categories: props.categories,
      crosshair: true
    }],
    yAxis: [{
      title: {
        text: 'yAxis title'
      }
    },
    {
      title: {
        text: 'yAxis-2 title'
      }
    }],
    series: [{
      type: 'column',
      name: 'series-1', // props.seriesName,
      data: props.series1Data
    },
    {
      type: 'spline',
      name: 'series 2',
      data: props.series2Data
    }]
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
