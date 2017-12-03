// var gulp = require("gulp"),
// 	gutil = require("gulp-util"),
// 	webpack = require("webpack"),
// 	WebpackDevServer = require("webpack-dev-server"),
// 	webpackConfig = require("../../webpack.config.js"),
// 	config = require('./config.js');
//
// // The development server (the recommended option for development)
// gulp.task("webpack:server:dev", ["webpack-dev-server"]);
//
// // Production build.
// gulp.task("webpack:prod", ["webpack:build"]);
//
// gulp.task("webpack:build", function(callback) {
// 	// modify some webpack config options
// 	var myConfig = Object.create(webpackConfig);
// 	myConfig.plugins = myConfig.plugins.concat(
// 		new webpack.DefinePlugin({
// 			"process.env": {
// 				// This has effect on the react lib size
// 				"NODE_ENV": JSON.stringify("production")
// 			}
// 		}),
// 		new webpack.optimize.DedupePlugin(),
// 		new webpack.optimize.UglifyJsPlugin()
// 	);
//
// 	// run webpack
// 	webpack(myConfig, function(err, stats) {
// 		if(err) throw new gutil.PluginError("webpack:build", err);
// 		gutil.log("[webpack:build]", stats.toString({
// 			colors: true
// 		}));
// 		callback();
// 	});
// });
//
// // Modify some webpack config options.
// var myDevConfig = Object.create(webpackConfig);
// myDevConfig.devtool = "sourcemap";
// myDevConfig.debug = true;
//
// // Create a single instance of the compiler to allow caching.
// var devCompiler = webpack(myDevConfig);
//
// // Compiles the TS files.
// gulp.task("webpack:build-dev", function(callback) {
// 	// run webpack
// 	devCompiler.run(function(err, stats) {
// 		if(err) throw new gutil.PluginError("webpack:build-dev", err);
// 		gutil.log("[webpack:build-dev]", stats.toString({
// 			chunks: false,
// 			colors: true
// 		}));
// 		callback();
// 	});
// });
//
// gulp.task("webpack-dev-server", function(callback) {
// 	// modify some webpack config options
// 	var myConfig = Object.create(webpackConfig);
// 	myConfig.devtool = "eval";
// 	myConfig.debug = true;
//
// 	// Start a webpack-dev-server.
// 	new WebpackDevServer(webpack(myConfig), {
// 		publicPath: "/" + myConfig.output.publicPath,
// 		stats: {
// 			colors: true
// 		}
// 	}).listen(8082, "hackathon.dev", function(err) {
// 		if(err) throw new gutil.PluginError("webpack-dev-server", err);
// 		gutil.log("[webpack-dev-server]", "http://hackathon.dev:8082/");
// 	});
// });
