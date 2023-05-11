const { resolve } = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PKG = require("./package.json");

const SRC = resolve(__dirname, "src");
const ASSETS = resolve(__dirname, "assets");
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = () => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    context: __dirname,
    entry: { index: resolve(SRC, "index.js") },
    output: {
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          use: ["ts-loader"],
          include: [SRC],
        },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset",
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        "process.env": {
          mode: JSON.stringify(process.env.NODE_ENV),
          commit: JSON.stringify(gitRevisionPlugin.commithash()),
          version: JSON.stringify(PKG.version),
        },
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: resolve(SRC, "index.html"),
        title: isProd ? PKG.config.title : PKG.name,
      }),
    ].concat(
      isProd
        ? [
            new CopyPlugin({
              patterns: [{ from: ASSETS, to: "[path]/assets/[name][ext]" }],
            }),
            new MiniCssExtractPlugin({ chunkFilename: "[id].css" }),
            new BundleAnalyzerPlugin({
              openAnalyzer: false,
              analyzerMode: "static",
              reportFilename: "bundle.html",
            }),
          ]
        : []
    ),
    resolve: {
      alias: {
        "~": SRC,
        "~c": resolve(SRC, "components"),
      },
    },
    devtool: isProd ? "hidden-source-map" : "inline-source-map",
    devServer: {
      compress: true,
      historyApiFallback: true,
      server: "https",
      hot: "only",
      open: true,
      static: {
        directory: ASSETS,
        publicPath: "/assets",
      },
      watchFiles: [SRC, ASSETS],
    },
  };
};
