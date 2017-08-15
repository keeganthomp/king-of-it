module.exports = {
  entry: "./src/in",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  watch: true
};
