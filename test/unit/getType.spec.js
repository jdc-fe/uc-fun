import getType from '../../src/getType';

const tagObject = {};
const tagNumber = 1;
const tagArray = [];
const tagFunction = () => { };
const tagDate = new Date();
const tagString = 'hello';
const tagUndefined = undefined;
const tagNull = null;

describe('baseDataType', () => {
  it('normal: show data type', () => {
    assert(getType(tagObject) === 'Object');
    assert(getType(tagNumber) === 'Number');
    assert(getType(tagArray) === 'Array');
    assert(getType(tagFunction) === 'Function');
    assert(getType(tagDate) === 'Date');
    assert(getType(tagString) === 'String');
    assert(getType(tagUndefined) === 'Undefined');
    assert(getType(tagNull) === 'Null');
  });
});
