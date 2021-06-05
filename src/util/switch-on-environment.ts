import { NodeEnvironment } from "../enum";
import { EnvironmentRecord } from "../typing";

export const switchOnEnvironment = (environment: string, objects: EnvironmentRecord): Record<string, any> => {
  switch (environment) {
    case NodeEnvironment.PRODUCTION:
      return objects.production;

    case NodeEnvironment.STAGING:
      return objects.staging;

    case NodeEnvironment.DEVELOPMENT:
      return objects.development;

    case NodeEnvironment.TEST:
      return objects.test;

    default:
      return {};
  }
};
