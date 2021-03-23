export interface IConfigurationDataBase {
  NODE_ENVIRONMENT: string;
}

export interface IConfigurationOptions<IConfigurationData extends IConfigurationDataBase> {
  productionConfig: IConfigurationData;
  stagingConfig: IConfigurationData;
  developmentConfig: IConfigurationData;

  environmentConfig: IConfigurationData;
  testConfig: IConfigurationData;
}

export interface IEnvironmentObjects {
  production: Record<string, any>;
  staging: Record<string, any>;
  development: Record<string, any>;
  test: Record<string, any>;
}
