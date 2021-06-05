import { EnvironmentRecord } from "../typing";
import { NodeEnvironment } from "../enum";
import { switchOnEnvironment } from "./switch-on-environment";

describe("switchConfiguration", () => {
  const objects: EnvironmentRecord = {
    production: { production: true },
    staging: { staging: true },
    development: { development: true },
    test: { test: true },
  };

  test("should return PRODUCTION object", () => {
    expect(switchOnEnvironment(NodeEnvironment.PRODUCTION, objects)).toMatchSnapshot();
  });

  test("should return STAGING object", () => {
    expect(switchOnEnvironment(NodeEnvironment.STAGING, objects)).toMatchSnapshot();
  });

  test("should return DEVELOPMENT object", () => {
    expect(switchOnEnvironment(NodeEnvironment.DEVELOPMENT, objects)).toMatchSnapshot();
  });

  test("should return TEST object", () => {
    expect(switchOnEnvironment(NodeEnvironment.TEST, objects)).toMatchSnapshot();
  });
});
