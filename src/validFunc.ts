import getType from './getType';

/**
 *  call function is function is valide
 */
export const validFunc = (func: Function, ...args: any[]) => (
  getType(func) === 'Function' && func(...args)
);
