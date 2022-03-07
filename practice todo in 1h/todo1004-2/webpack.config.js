const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
module.exports = () => {
  return {
    mode,
    entry: {
      main: "./src/index.tsx",
    },
    output: {
      filename: "[name].js",
      path: path.resolve("./dist"),
      assetModuleFilename: "images/[hash][ext][query]",
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        minify:
          mode === "production"
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
      }),
      ...(mode === "production"
        ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
        : []),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            mode === "production"
              ? MiniCssExtractPlugin.loader // 프로덕션 환경
              : "style-loader", // 개발 환경
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },
        {
          test: /\.(svg)$/,
          type: "asset/inline",
        },
      ],
    },
    devServer: {
      host: "localhost",
      port: 8080,
      open: true,
      historyApiFallback: true,
      proxy: {
        "/api": "http://localhost:8081", // 프록시
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json"],
      alias: {
        "@features": path.resolve(__dirname, "./src/features"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@app": path.resolve(__dirname, "./src/app"),
      },
    },
  };
};
