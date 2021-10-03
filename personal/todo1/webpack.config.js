const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const apiMocker = require("connect-api-mocker");
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
      new CopyPlugin({
        patterns: [
          {
            from: "./node_modules/axios/dist/axios.min.js",
            to: "./axios.min.js",
          },
        ],
      }),
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
    optimization: {
      minimizer: mode === "production" ? [new OptimizeCSSAssetsPlugin()] : [], //css 빈칸 제거 압축
    },
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
    externals: {
      axios: "axios",
    },
    devServer: {
      host: "localhost",
      port: 8080,
      open: true,
      historyApiFallback: true,
      onBeforeSetupMiddleware: (devServer) => {
        devServer.app.use(apiMocker("/api", "mocks/api"));
      },
      proxy: {
        "/api": "http://localhost:8081", // 프록시
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json"],
      alias: {
        // "@stories": path.resolve(__dirname, "./src/stories"),
      },
    },
  };
};
