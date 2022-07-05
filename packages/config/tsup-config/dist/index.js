"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  defaultConfig: () => defaultConfig,
  tsupConfig: () => tsupConfig
});
module.exports = __toCommonJS(src_exports);

// src/tsup-config.ts
var import_config_creator = require("@atmosfera/config-creator");
var defaultConfig = {
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  legacyOutput: true,
  minify: false
};
var tsupConfig = (0, import_config_creator.configCreator)(defaultConfig);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultConfig,
  tsupConfig
});
