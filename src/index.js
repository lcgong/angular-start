
var typescriptAttr = hasAttrChecked('ts');
var debugAttr =  hasAttrChecked('debug');

// 1. 先加载systemjs和及其配置文件
// 2. 接着加载lib.rt，如果采用动态加载，
//    先定义transpiler再并行加载lib.rt和lib.ts.transpiler
// 3. 最后加载angular模块
importScript('jspm_packages/system.js', true).then(function(){
  return importScript('jspm.config.js', true);
}).then(function(){
  if (typescriptAttr) {
    // 配置动态ts编译，接着并行加载其所需包
    return importScript('jspm.config.transpiler.js', true).then(function(){
      return Promise.all([
        importScript('rt.js', true),
        importScript('ts.transpiler.js', true)
      ]);
    });
  } else {
    // 加载已编译成js的typescript程序
    return importScript('rt.js', true);
  }
}).then(function() {
  // 开始加载anuglar模块
  return System.import('app/bootstrap');
}).catch(function(err){ console.error(err); });

//---------------------------------------------------------------------------

function importScript(package, asyncFlag) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script');

    script.src = package;
    script.async = asyncFlag;
    script.addEventListener('load', function loadHandler(event) {
      event.currentTarget.removeEventListener(event.type, loadHandler);
      resolve(package);
    });
    script.addEventListener('error', function errorHandler(event) {
      event.currentTarget.removeEventListener(event.type, errorHandler);
      reject('error in loading: ' + package);
    });
    document.head.appendChild(script);
  });
}

function hasAttrChecked(attrName) {
  var htmlEl = document.getElementsByTagName('html')[0];
  var attrValue = htmlEl.getAttribute(attrName);

  return attrValue === '' || attrValue;
}
