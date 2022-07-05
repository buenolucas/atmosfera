// src/config-creator.ts
import deepmerge from "deepmerge";
var overwriteMerge = (_, sourceArray) => sourceArray;
var configCreator = (defaultConfig = {}) => (config = {}, deepmergeConfig) => deepmerge(defaultConfig, config, {
  arrayMerge: (deepmergeConfig == null ? void 0 : deepmergeConfig.arrayMerge) === "overwrite" ? overwriteMerge : void 0
});
export {
  configCreator
};
