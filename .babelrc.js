const { NODE_ENV, BABEL_ENV } = process.env;

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"]
};
