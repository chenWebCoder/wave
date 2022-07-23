module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    browser: true,
    // node: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  rules: {
    // 自定义你的规则
    'array-callback-return': 0,
    'max-params': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/prefer-for-of': 0,
  },
};
