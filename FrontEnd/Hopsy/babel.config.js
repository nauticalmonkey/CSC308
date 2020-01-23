module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-expo","module:react-native-dotenv"],
    plugins: ["@babel/plugin-proposal-class-properties","@babel/plugin-transform-flow-strip-types"]
  };
};
