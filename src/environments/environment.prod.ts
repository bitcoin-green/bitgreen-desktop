declare const require: any;

export const environment = {
  production: false,
  version: require('../../package.json').version,
  releasesUrl: 'https://api.github.com/repos/bitgreen/bitgreen-desktop/releases/latest',
  envName: 'prod',
  bitgreenHost: 'localhost',
  bitgreenPort: 9332
};
