const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 9000
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
	new HtmlWebPackPlugin({
		template: './public/index.html', // public/index.html 파일을 읽는다.
		filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
	}),
	new MiniCssExtractPlugin({
		filename: 'style-test.css'
    }),
    new CleanWebpackPlugin()
]
};