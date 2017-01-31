module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'openui5'],
    browsers: ['Chrome'],
    openui5: {
      path: 'bower_components/openui5-sap.ui.core/resources/sap-ui-core.js',
      useMockServer: false
    },
    files: [
      'node_modules/expect/umd/expect.js',
      'node_modules/redux/dist/redux.js',
      'test/redux/' +
      '**/*.test.js',
      { pattern: 'src/**/*', watched: true, included: false, served: true },
      { pattern: 'test/fixtures/*', watched: true, included: false, served: true },
      { pattern: 'bower_components/openui5-sap.ui.core/resources/**', watched: false, included: false, served: true }
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    client: {
      openui5: {
        config: {
          libs: 'redux',
          theme: 'base',
          resourceRoots: {
            redux: './base/src/redux',
            fixtures: './base/test/fixtures'
          }
        }
      }
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    }
  });
};
