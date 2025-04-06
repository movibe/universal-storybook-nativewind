const main = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.?(ts|tsx|js|jsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },
        ],
      },
    },
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "babel-loader",
      options: {
        presets: [
          ["babel-preset-expo", { jsxImportSource: "nativewind" }],
          "nativewind/babel",
        ],
        plugins: ["react-native-reanimated/plugin", "@babel/plugin-transform-modules-commonjs"],
      },
    });

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default main;
