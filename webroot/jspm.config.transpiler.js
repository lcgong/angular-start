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
    "target": "es2015",
    "module": "commonjs",
    "sourceMap": true,
    "lib": [
      "es2015",
      "dom"
    ],
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },
});
