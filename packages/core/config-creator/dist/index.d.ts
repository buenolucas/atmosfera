declare const configCreator: <T extends Record<string, any>>(defaultConfig?: T) => (config?: T, deepmergeConfig?: {
    arrayMerge: 'append' | 'overwrite';
}) => T;

export { configCreator };
