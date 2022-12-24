import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function AreaChart (props: HighchartsReact.Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    title: {
      text: props.title as string
    },
    series: [{
      type: 'area',
      data: props.data as number[]
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
