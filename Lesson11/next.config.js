const dotenv = require('dotenv');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env || {}).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.ignoreWarnings = [
        {
          message: /topLevelAwait/,
        },
      ];
    }

    config.plugins.push(new webpack.DefinePlugin(envKeys));

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json"
      })
    );

    config.plugins.push(new FaviconsWebpackPlugin('./public/favicon.png'));

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    });

    return config;
  },

  productionBrowserSourceMaps: true,
};