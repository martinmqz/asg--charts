const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const mode = process.env.NODE_ENV || 'development'
const isAnalyze = process.env.BUNDLE_ANALYZE || false
const isProduction = mode === 'production'

const entry = {
  main: {
    import: './src/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'pie-chart': {
    import: './src/components/PieChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'area-chart': {
    import: './src/components/AreaChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'line-chart': {
    import: './src/components/LineChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'column-chart': {
    import: './src/components/ColumnChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'line-and-column-chart': {
    import: './src/components/LineAndColumnChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'line-time-series-chart': {
    import: './src/components/LineTimeSeriesChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'column-negative-chart': {
    import: './src/components/ColumnNegativeChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'column-negative-double-chart': {
    import: './src/components/ColumnNegativeDoubleChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'spline-symbols-chart': {
    import: './src/components/SplineSymbolsChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'area-annotations-chart': {
    import: './src/components/AreaAnnotationsChart/index.tsx',
    dependOn: ['react-18.2.0']
  },
  'react-18.2.0': ['react', 'react-dom']
}

const output = {
  filename: '[name].bundle.min.js',
  sourceMapFilename: '[name].bundle.min.js.map',
  clean: true
}
const devServer = {
  open: true,
  port: 8000,
  static: 'demo',
  client: {
    overlay: {
      errors: true,
      warnings: false
    }
  }
}
const plugins = [
  new HtmlWebpackPlugin({
    template: 'demo/index.html',
    filename: 'index.html',
    chunks: ['main', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/pie-chart.html',
    filename: 'pie-chart.html',
    chunks: ['pie-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/area-chart.html',
    filename: 'area-chart.html',
    chunks: ['area-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/line-chart.html',
    filename: 'line-chart.html',
    chunks: ['line-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/column-chart.html',
    filename: 'column-chart.html',
    chunks: ['column-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/line-and-column-chart.html',
    filename: 'line-and-column-chart.html',
    chunks: ['line-and-column-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/line-time-series-chart.html',
    filename: 'line-time-series-chart.html',
    chunks: ['line-time-series-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/column-negative-chart.html',
    filename: 'column-negative-chart.html',
    chunks: ['column-negative-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/column-negative-double-chart.html',
    filename: 'column-negative-double-chart.html',
    chunks: ['column-negative-double-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/spline-symbols-chart.html',
    filename: 'spline-symbols-chart.html',
    chunks: ['spline-symbols-chart', 'react-18.2.0']
  }),
  new HtmlWebpackPlugin({
    template: 'demo/area-annotations-chart.html',
    filename: 'area-annotations-chart.html',
    chunks: ['area-annotations-chart', 'react-18.2.0']
  })
]
const _module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: ['/node_modules/']
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'asset'
    }
  ]
}
const optimization = {
  runtimeChunk: false // 'multiple', // 'single'
}
const resolve = {
  extensions: ['.tsx', '.ts', '.jsx', '.js']
}
const externals = {}

let devtool = false
if (isProduction) {
  devtool = 'source-map'
}
if (isAnalyze) {
  plugins.push(
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  )
}

console.log(`========================= ${mode.toUpperCase()} BUILD =========================`)

module.exports = {
  mode,
  entry,
  output,
  devtool,
  optimization,
  devServer,
  plugins,
  module: _module,
  resolve,
  externals
}
