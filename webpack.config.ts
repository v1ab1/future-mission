import path from 'path'
import {Configuration} from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

type CustomDevServer = {
  historyApiFallback: boolean
}

interface CustomWebpackConfiguration extends Configuration {
  devServer?: CustomDevServer
}

const config: CustomWebpackConfiguration = {
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: 'public'}],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
}

export default config
