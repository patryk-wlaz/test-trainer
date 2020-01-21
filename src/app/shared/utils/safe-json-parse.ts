export const safeJSONParse = value => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};
