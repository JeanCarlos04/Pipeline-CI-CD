const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Ajusta esta ruta si es necesario
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Ruta del archivo HTML en tu carpeta 'src'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
