import { mergeObjectsWithBias, switchOnEnvironment } from "../util";
import { DefaultConfiguration, ConfigurationOptions } from "../typing";

export abstract class ConfigurationBase<Configuration extends DefaultConfiguration> {
  private readonly productionConfig: Configuration;
  private readonly stagingConfig: Configuration;
  private readonly developmentConfig: Configuration;

  private readonly environmentConfig: Configuration;
  private readonly testConfig: Configuration;

  protected constructor(options: ConfigurationOptions<Configuration>) {
    this.productionConfig = options.productionConfig;
    this.stagingConfig = options.stagingConfig;
    this.developmentConfig = options.developmentConfig;

    this.environmentConfig = options.environmentConfig;
    this.testConfig = options.testConfig;
  }

  public get(environment: string): Configuration {
    return mergeObjectsWithBias(
      this.environmentConfig,
      switchOnEnvironment(environment, {
        production: this.productionConfig,
        staging: this.stagingConfig,
        development: this.developmentConfig,
        test: this.testConfig,
      }),
    ) as Configuration;
  }
}
