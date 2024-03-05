import getType from './getType';

/**
 *  call function is function is valide
 */
export default function validFunc(func: Function, ...args: any[]) {
  return getType(func) === 'Function' && func(...args);
}
