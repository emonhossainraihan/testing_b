const withImages = require("next-images");
const withYAML = require("next-yaml");
//const { withSentryConfig } = require("@sentry/nextjs");

let config = {
  target: "serverless",
};

config = {
  ...config,
  sassOptions: {
    additionalData: `
@use "sass:math";
@import "styles/palettes.scss";
@import "styles/theme.scss";
@import "styles/mixins.scss";
    `,
  },
};

config = {
  ...config,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

config = withImages(config);

config = withYAML(config);

// remove basePath and assetPrefix for local dev
module.exports = {
  ...config,
  // basePath: '/testing_b',
  // assetPrefix: '.'
}