

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["nativewind/babel"],
    'react-native-reanimated/plugin',
    require.resolve('expo-router/babel'),
    ['@babel/plugin-proposal-decorators', { legacy: true }], // mbox
    [
      'module-resolver',
      {
        alias: {
          src: './src'
        }
      }
    ]]
  };
};
