var pkg = require('../package.json');


module.exports = function(config) {
  config.set({
      basePath: '.',

    // Other Karma config here...
    frameworks: ['benchmark', 'browserify'],

    files: [
        'suites/*.js'
    ],

    preprocessors: {
        'suites/*.js': ['browserify']
    },

    reporters: ['benchmark', 'junit'],

    junitReporter: {
        outputDir: 'results',
        outputFile: 'v' + pkg.version + '.xml',
        suite: '',
        useBrowserName: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browserify: {
        transform: ['../tasks/util/shortcut_paths.js'],
        extensions: ['.js'],
        watch: true,
        debug: true
    }
  });
};
