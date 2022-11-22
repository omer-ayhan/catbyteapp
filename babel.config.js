module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          'android.tsx',
          'ios.tsx',
          '.js',
          '.ios.js',
          '.android.js',
        ],
        alias: {
          '@components': './components',
          '@screens': './screens',
          '@utils': './utils',
          '@assets': './assets',
          '@constants': './constants',
          '@hooks': './hooks',
          '@styles': './styles',
          '@ui': './ui',
          '@core': './core',
          '@services': './services',
          '@store': './store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
