var rootPath = process.env.PWD = process.cwd();
// File sets.
var filesets = {
  templateCache: ['app/**/*.html', '!app/index.html', '!app/partials/**'],
  templates: ['app/index.html', 'app/partials/*.html'],
  js: ['app/**/*.js', '!app/**/*-spec.js'],
  ts: ['app/**/*.ts', '!app/**/*.spec.ts', '!app/**/*.e2e.ts'],
  test: ['app/**/*.e2e.ts'],
  jsall: ['app/**/*.js', '!app/**/*-mock-data.js'],
  sass: ['app/styles/main.scss'],
  css: ['app/**/*.css'],
  assets: 'dist/**'
};
// Paths
var paths = {
  root: rootPath,
  app: rootPath.concat('/app/'),
  vendor_dev: rootPath.concat('/dist/vendor/'),
  prod: rootPath.concat('/public/'),
  assets: rootPath.concat('/dist/'),
  js: rootPath.concat('/dist/js/'),
  css: rootPath.concat('/app/styles/')
};

module.exports = {
  filesets: filesets,
  paths: paths,
  sassFile: paths.app.concat('app.scss')
};