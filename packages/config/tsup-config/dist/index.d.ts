import { Options } from 'tsup';

declare const defaultConfig: Options;
declare const tsupConfig: (config?: Options | undefined, deepmergeConfig?: {
    arrayMerge: "append" | "overwrite";
} | undefined) => Options;

export { defaultConfig, tsupConfig };
