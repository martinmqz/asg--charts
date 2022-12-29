import Highcharts from 'highcharts'

const options:Highcharts.Options = {
  title: {
    text: ''
  },
  // subtitle: {
  //   text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
  // },
  xAxis: { type: 'datetime' },
  yAxis: { title: { text: 'yAxis-title' } },
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
    name: 'series name'
    // data:
  }]

}
export default options
