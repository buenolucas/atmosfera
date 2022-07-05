import type { Options } from 'tsup';

import { configCreator } from '@atmosfera/config-creator';

export type TSUpConfigOptions = Options;

export const defaultConfig: Options = {
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  /**
   * legacyOutput `true` because some libraries don't support `.mjs`.
   */
  legacyOutput: true,
  /**
   * Becomes difficult to debug if code is minified.
   */
  minify: false,
};

export const tsupConfig = configCreator(defaultConfig);
