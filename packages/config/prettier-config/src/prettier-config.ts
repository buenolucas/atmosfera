/**
 * https://prettier.io/docs/en/configuration.html#sharing-configurations
 */
import { configCreator } from '@atmosfera/config-creator';

export const defaultConfig: any = {
  arrowParens: 'always',
  printWidth: 85,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
};

export const prettierConfig = configCreator(defaultConfig);
