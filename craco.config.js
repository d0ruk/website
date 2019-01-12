const path = require("path");
const webpack = require("webpack");
const { whenDev, whenProd } = require("@craco/craco");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { LicenseWebpackPlugin } = require("license-webpack-plugin");

const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = function({ env, paths }) {
  return {
    webpack: {
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            mode: JSON.stringify(env),
            VERSION: JSON.stringify(gitRevisionPlugin.version()),
            COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
            BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
          },
        }),
        whenDev(() => new BundleAnalyzerPlugin()),
        whenProd(() => new LicenseWebpackPlugin({ perChunkOutput: false })),
      ].filter(Boolean),
      alias: {
        "~": path.join(__dirname, "src"),
        "~c": path.join(__dirname, "src", "components"),
      },
    },
    plugins: [
      { plugin: require("craco-plugin-react-hot-reload") },
      // { plugin: require("craco-preact") },
    ],
  };
};
