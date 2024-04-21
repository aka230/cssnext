export const paramKeys = [
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'margin',
  'marginLeft',
  'marginTop',
  'marginRight',
  'marginBottom',
  'padding',
  'borderRadius',
  'border',
  'boxShadow',
  'background',
  'backgroundColor',
  'backgroundImage',
];

/** 通用属性处理 */
export const commonParams = (params: { [key: string]: any }) => {
  const result: { [key: string]: any } = {};
  paramKeys.forEach((key) => {
    if (params[key]) {
      result[key] = params[key];
    }
  });
  return result;
};
