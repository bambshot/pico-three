module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  target: ["web", "es5"],
};