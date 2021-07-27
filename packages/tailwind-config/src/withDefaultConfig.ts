import merge from "ts-deepmerge";
import { defaultConfig } from "./defaultConfig";

export interface Config {
  [key: string]: unknown;
}

function withDefaultConfig(config?: Config) {
  if (!config) return defaultConfig;

  return merge(defaultConfig, config);
}

export { withDefaultConfig };
