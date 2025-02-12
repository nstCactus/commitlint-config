# commitlint-config

A [shareable config](https://conventional-changelog.github.io/commitlint/#/concepts-shareable-config)
for [commitlint](https://conventional-changelog.github.io/commitlint/)
enforcing [conventional commits](https://conventionalcommits.org/).

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]

<!--consumer-badges end -->

This config extends [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)

### Installation

```sh
npm install @nstcactus/commitlint-config --save-dev
```

### Define the config for your project

```sh
echo "module.exports = {extends: ['@nstcactus']};" > .commitlintrc.js
```


## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]


<!--contribution-badges end -->

### Dependencies

```sh
npm install
```

### Verification

```sh
npm test
```

[npm-link]: https://www.npmjs.com/package/@nstcactus/commitlint-config
[npm-badge]: https://img.shields.io/npm/v/@nstcactus/commitlint-config.svg
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release
