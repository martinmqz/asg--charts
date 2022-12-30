import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAnnotations from 'highcharts/modules/annotations'

highchartsAnnotations(Highcharts)
interface Props {
  data: number[][]
}
export default function AreaChart (props:Props) {
  const chartRef = React.useRef<HighchartsReact.RefObject>(null)
  const options: Highcharts.Options = {
    chart: {
      type: 'area',
      zooming: {
        type: 'x'
      },
      // panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 600
      }
    },

    caption: {
      text: 'This chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens.'
    },

    title: {
      text: '2017 Tour de France Stage 8: Dole - Station des Rousses'
    },

    accessibility: {
      description: 'This line chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens. Image description: An annotated line chart illustrates the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis, and distance is plotted on the X-axis. The line graph is interactive, and the user can trace the altitude level along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.',
      landmarkVerbosity: 'one'
    },

    lang: {
      accessibility: {
        screenReaderSection: {
          annotations: {
            descriptionNoPoints: '{annotationText}, at distance {annotation.options.point.x}km, elevation {annotation.options.point.y} meters.'
          }
        }
      }
    },

    credits: {
      enabled: false
    },
    xAxis: {
      // labels: {
      //   format: '{value: %d-%Y}'
      // },
      // type: 'datetime',
      minRange: 5,
      title: {
        text: 'Distance'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 187.8km.'
      }
    },

    yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0.35,
      title: {
        text: 'Downstream barge freight rate (% of USDA tari)'
      },
      labels: {
        format: '{value:,.1f}%'
      },
      accessibility: {
        description: 'Elevation',
        rangeDescription: 'Range: 0 to 1,553 meters'
      }
    },

    tooltip: {
      headerFormat: 'Distance: {point.x:.1f} km<br>',
      pointFormat: '{point.y} m a. s. l.',
      shared: true
    },
    annotations: [{
      labels: [{
        point: {
          x: 90,
          y: 679,
          xAxis: 0,
          yAxis: 0
        },
        text: 'Label annotation'
      },
      {
        point: {
          x: 101.4,
          y: 1025,
          xAxis: 0,
          yAxis: 0
        },
        text: 'High annotation'
      }]
    }
    ],
    legend: {
      enabled: false
    },
    series: [{
      type: 'area',
      data: props.data,
      // lineColor: Highcharts.getOptions().colors[1],
      // color: Highcharts.getOptions().colors[2],
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
        enabled: false
      },
      threshold: null
    }]
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  )
}
