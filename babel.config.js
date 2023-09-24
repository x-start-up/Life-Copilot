

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["nativewind/babel"],
    'react-native-reanimated/plugin',
    require.resolve('expo-router/babel'),
    ['@babel/plugin-proposal-decorators', { legacy: true }], // mbox
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/', // 使用 ~/  代替 ./src (~指向的就是src目录)
          }
        ],
      },
    ]]
  };
};
