const path = require("path")

module.exports = {
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dh-widgets.js",
    library: "dhWidget",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '',
              name: 'dh-widgets.css'
            }
          },
          "sass-loader",
        ],
      },
    ],
  },
  mode: "development",
}