import getType from './getType';

/**
 *  call function is function is valide
 */
export const validFunc = (func, ...args) => (
  getType(func) === 'Function' && func(...args)
);
