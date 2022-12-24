import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function LineChart (props:HighchartsReact.Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    title: {
      text: props.title as string
    },
    legend: {
      // enabled: false
    },
    series: [{
      type: 'line',
      name: 'Year',
      data: props.data as number[][]
    }],
    plotOptions: {

    },
    yAxis: {
      title: {
        text: 'Yields'
      },
      max: 7
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 50
    //   dateTimeLabelFormats: {
    //     year: '\'%y',
    //     month: '%b-%y',
    //     week: '%b %e',
    //     day: '%b %e'
    //   }
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
