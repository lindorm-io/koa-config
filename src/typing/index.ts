export interface DefaultConfiguration {
  NODE_ENVIRONMENT: string | null;
}

export interface ConfigurationOptions<Configuration extends DefaultConfiguration> {
  productionConfig: Configuration;
  stagingConfig: Configuration;
  developmentConfig: Configuration;

  environmentConfig: Configuration;
  testConfig: Configuration;
}

export interface EnvironmentRecord {
  production: Record<string, any>;
  staging: Record<string, any>;
  development: Record<string, any>;
  test: Record<string, any>;
}
