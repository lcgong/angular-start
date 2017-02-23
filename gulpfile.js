var gulp = require('gulp');

gulp.task('default', function() {
  console.log('default');
  // 将你的默认的任务代码放在这
});

gulp.task('tsc:w', ['tsc'], function () {
    gulp.watch('web/**/*.ts', ['tsc']);
});

gulp.task('tsc', function () {
  var ts = require('gulp-typescript');
  var prj = ts.createProject('tsconfig.json');

  return gulp.src('web/**/*.ts')
    .pipe(ts(prj))
    .pipe(gulp.dest('web/transpiled'));
});

gulp.task('webapp', function() {
  // 前端HTTP服务器

  let port = 8888;

  let connect = require('connect');
  let http = require('http');
  let staticHandler = require('serve-static');
  let historyHandler = require('connect-history-api-fallback');

  let app = connect()
    .use(loggerHandler)
    .use(historyHandler({ // 所有没有后缀的访问路径均转向指定的页面
      index: '/index.html',
    }))
    .use('/build', staticHandler('build'))
    .use('/node_modules', staticHandler('node_modules'))
    .use('/jspm_packages', staticHandler('jspm_packages'))
    .use('/', staticHandler('transpiled'))
    .use('/', staticHandler('web'));

  http.createServer(app).listen(port, () => {
    console.log(formatTimestamp() + ' ' + 'Webapp is listening on ['
      + chalk.bold.yellow(port) + '] ...');
  });

  let chalk = require('chalk');
  let moment = require('moment');

  function formatTimestamp() {
    let now = new Date();
    let padding = (n) => (n < 10) ? "0" + n : n;
    return ['[', chalk.grey(padding(now.getHours())), chalk.grey(':'),
            chalk.bold.grey(padding(now.getMinutes())), chalk.grey(':'),
            chalk.bold.grey(padding(now.getSeconds())), ']'].join('');
  }

  function loggerHandler(req, res, next) { // 记录访问日志
    let path = req.url;
    var end = res.end;
    req._startTime = new Date();
    res.end = (chunk, encoding, callback) => {
      res.end = end;
      res.end(chunk, encoding, callback);
      process.nextTick(() => {
        // 等这轮事件结束再输出日志
        let code = (res.statusCode < 400) ? chalk.bold.green : chalk.bold.red;
        let msg = [
          formatTimestamp(),
          code(res.statusCode),
          chalk.bold.cyan(req.method),
          path,
          chalk.magenta('' + (new Date() - req._startTime) + 'ms')
        ].join(' ');
        console.log(msg);
      });
    };
    next();
  }
});



const jspmBundleOpts =  {
  minify: true,
  sourceMaps: true,
  mangle: false,
  format: 'umd'
};

const webBuildDir = 'build/';


gulp.task('thirdparty', function() {
  // 将devConfig出现的包临时添加到主配置里，因为在bundle时无法找到devConfig定义的

  let Builder = require('jspm').Builder;
	let builder = new Builder();

  let jspmConfigMgr = require('jspm/lib/config');
  jspmConfigMgr.loadSync();

  let config = Object.assign({}, jspmConfigMgr.loader.getConfig());

  let rtPackages = Object.keys(config.map); // 定义运行的库
  let devPackages = Object.keys(config.devConfig.map); // 定义在开发时的库

  Object.assign(config.map, config.devConfig.map);
  Object.assign(config.packages, config.devConfig.packages);
  builder.loader.config(config);

  return Promise.all([
    bundle('Build runtime bundles: ', rtPackages, 'thirdparty.rt.js'),
    // bundle('Build devlepment bundles: ', devPackages, 'thirdparty.dev.js')
  ]);

  function bundle(title, packages, outfile) {

    let Builder = require('jspm').Builder;
  	let builder = new Builder();

    packages = packages.join(' + ');

    console.log(title, packages);

  	return builder.bundle(packages, webBuildDir + outfile, jspmBundleOpts);
  }
});

gulp.task('bundle:rxjs', [], (cb) => {
  let SystemJSBuilder = require('systemjs-builder');
  let builder = new SystemJSBuilder();

  // let rxmap = {};
  // .forEach(function (submodule) {
  //    rxmap['rxjs/' + submodule] = 'rxjs';
  // })

  let packages;
  packages = [
     'Rx',
     'Observable',
     'Subject',
     'observable/PromiseObservable',
     'operator/toPromise'
  ].map((submodule) => 'rxjs/' + submodule);

  let rxmap = packages.reduce((rxmap, pkg) => {
    rxmap[pkg] = 'rxjs';
    return rxmap;
  }, {});

  packages = packages.join(' + ')

  let config = {
      paths: {
          "rxjs/*" : "node_modules/rxjs/*.js",
      },
      map: {
          "rxjs": "node_modules/rxjs",
      },
      packages: {
          "rxjs": {
            main: "Rx.js",
            defaultExtension: "js"
          }
      }
  };

  builder.config(config);

  console.log(packages, config);

  // builder.bundle(packages, "build/rxjs.umd.js", {
  builder.bundle('rxjs', "build/rxjs.umd.js", {
      normalize: true,
      runtime: false,
      minify: true,
      sourceMaps: true,
      mangle: false
  });
});
