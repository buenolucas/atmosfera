// src/tsup-config.ts
import { configCreator } from "@atmosfera/config-creator";
var defaultConfig = {
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  legacyOutput: true,
  minify: false
};
var tsupConfig = configCreator(defaultConfig);
export {
  defaultConfig,
  tsupConfig
};
