import getType from '../../src/getType';

describe('baseDataType', () => {
  it('normal: show data type', () => {
    assert(getType({}) === 'Object');
    assert(getType(1) === 'Number');
    assert(getType([]) === 'Array');
    assert(getType(() => { }) === 'Function');
    assert(getType(new Date()) === 'Date');
    assert(getType('tagString') === 'String');
    assert(getType(undefined) === 'Undefined');
    assert(getType(null) === 'Null');
  });

  it('error: param is empty', () => {
    assert(getType() === 'Undefined');
  });
});
