const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { compilerOptions: { noEmit: false } },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'www'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
