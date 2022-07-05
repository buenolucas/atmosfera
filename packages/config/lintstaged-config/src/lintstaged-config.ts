import { configCreator } from '@atmosfera/config-creator'

// const escapedFileNames = (filenames: any) =>
//   filenames.map((filename: any) => `"${filename}"`).join(' ')


// export const defaultConfig = {
//   '**/*.{cjs,js,jsx,mjs,ts,tsx}': (files: any) => {
//     const filenames = escapedFileNames(files)
//     return [
//       `prettier --with-node-modules --ignore-path='./.prettierignore' --write ${filenames} --ignore-unknown --loglevel warn`,
//       `eslint --no-ignore --max-warnings=0 --fix ${filenames}`,
//       `git add ${filenames}`,
//     ]
//   },
//   '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (files: any) => {
//     const filenames = escapedFileNames(files)
//     return [
//       `prettier --with-node-modules --ignore-path='./.prettierignore' --write ${filenames} --ignore-unknown --loglevel warn`,
//       `git add ${filenames}`,
//     ]
//   },
// }

export const defaultConfig: any = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{md,mdx,html,json,yml,yaml}': 'prettier --write',
};


export const lintStagedConfig = configCreator<any>(defaultConfig)
