Package.describe({
  name: 'azfx:react-motion',
  version: '0.1.0',
  summary: 'React-Motion Animation Library packaged for Meteor',
  git: 'https://github.com/azfx/meteor-react-motion',
  documentation: 'README.md'
});

Npm.depends({
  'react-motion' : '0.2.7',
  'externalify': '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');
  api.use(['react@0.1.13', 'cosmos:browserify@0.5.1']);
  api.imply(['react@0.1.13']);
  api.addFiles('package.browserify.js');
  api.addFiles('package.browserify.options.json');

  api.export('ReactMotion');
});
