export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'kebab-case'],
    'header-max-length': [2, 'always', 120],
    'body-max-length': [1, 'always', 120],
  }
};
