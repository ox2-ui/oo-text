Package.describe({
  name: 'ox2:text',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    // Core
    api.use([
      'templating'
    ]);
    // 3rd party
    api.use([
      'lauricio:less-autoprefixer@2.5.0_3',
      'mquandalle:jade@0.4.5'
    ]);
    api.addFiles('lib/oo-text.jade', C);
    api.addFiles('lib/oo-text.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:text');
  api.addFiles('tests/package-tests.js');
});
