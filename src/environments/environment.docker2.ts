declare const require: any;

export const environment = {
  production: false,
  releasesUrl: 'https://api.github.com/repos/bitgreen/bitgreen-desktop/releases/latest',
  version: require('../../package.json').version,
  envName: 'docker2',
  bitgreenHost: 'localhost',
  bitgreenPort: 53935
};
