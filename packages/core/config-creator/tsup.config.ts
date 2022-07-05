// import isCI from 'is-ci'
import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

//import { config as _config } from '../../../tsup.config';

//const entry = ['./src/index.ts'];

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
  /**
   * ?
   */
  target: ['node16'],
};
export default defineConfig({
  ...defaultConfig,
});
