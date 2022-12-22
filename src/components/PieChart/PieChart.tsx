import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export interface Props {
  options: Highcharts.Options
}
export default function PieChart (props:HighchartsReact.Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)

  return (
    <>
    <HighchartsReact
      highcharts={Highcharts}
      options={props.options}
      ref={chartRef}
      {...props}
    />
    </>
  )
}
