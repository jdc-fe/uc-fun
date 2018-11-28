export const getType = target => (
  Object.prototype.toString.call(target).slice(8, -1)
);

export const isObject = target =>
  getType(target) === 'Object';

export const isArray = target =>
  getType(target) === 'Array';

export const isDate = target =>
  getType(target) === 'Date';

export const isString = target =>
  getType(target) === 'String';

export const isNumber = target =>
  getType(target) === 'Number';

export const isUndefined = target =>
  getType(target) === 'Undefined';

export const isNull = target =>
  getType(target) === 'Null';

export const isFunction = target =>
  getType(target) === 'Function';
