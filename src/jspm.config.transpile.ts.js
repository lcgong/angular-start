System.config({
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  typescriptOptions: {
    "check": true,
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [
      "es2015",
      "dom"
    ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },
});

importScripts(['build/lib.dev.js'], false); // 加载编译所需的库

function importScripts(packages, async) {
  packages.forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.head.appendChild(script);
  });
}
