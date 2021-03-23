export const mergeObjectsWithBias = (
  primary: Record<string, any>,
  secondary: Record<string, any>,
): Record<string, any> => {
  const object: Record<string, any> = secondary;

  for (const [key, value] of Object.entries(primary)) {
    if (value === null || value === undefined) continue;
    object[key] = value;
  }

  return object;
};
