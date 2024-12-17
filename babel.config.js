const ReactCompilerConfig = {
  target: '18', // '17' | '18' | '19'
  memoize: true
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      "regenerator": true
    }],
    ['babel-plugin-react-compiler', ReactCompilerConfig],
  ]
};
