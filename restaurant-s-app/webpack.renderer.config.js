const rules = require('./webpack.rules');

rules.push(
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.jsx?$/, // Para archivos .js y .jsx
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    }
);

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Para poder importar sin extensiones
  },
};
