// import isCI from 'is-ci'

import { tsupConfig, TSUpConfigOptions } from '@atmosfera/tsup-config'

const entry = ['src/index.ts']

/**
 * @todo(tsup) tsup-node does this automatically we can remove
 */
const external = []

const config: TSUpConfigOptions = {
  entry,
  external,
  minify: true,
  splitting: true,
  format: [],
  tsconfig: 'tsconfig.json',
}

export default tsupConfig(
  {
    ...config,
  },
  { arrayMerge: 'overwrite' }
)
