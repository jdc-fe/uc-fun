import {
  getType,
  isObject,
  isArray,
  isDate,
  isString,
  isNumber,
  isUndefined,
  isNull,
  isFunction
} from '../../src/baseDataType';

const tagObject = {};
const tagNumber = 1;
const tagArray = [];
const tagFunction = () => {};
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

describe('isObject', () => {
  it('normal', () => {
    assert(isObject(tagObject));
  });

  it('error: the param is empty', () => {
    assert(!isObject());
  });
});

describe('isArray', () => {
  it('normal', () => {
    assert(isArray(tagArray));
  });

  it('error: the param is empty', () => {
    assert(!isArray());
  });
});

describe('isDate', () => {
  it('normal', () => {
    assert(isDate(tagDate));
  });

  it('error: the param is empty', () => {
    assert(!isDate());
  });
});

describe('isString', () => {
  it('normal', () => {
    assert(isString(tagString));
  });

  it('error: the param is empty', () => {
    assert(!isString());
  });
});

describe('isNumber', () => {
  it('normal', () => {
    assert(isNumber(tagNumber));
  });

  it('error: the param is empty', () => {
    assert(!isNumber());
  });
});

describe('isFunction', () => {
  it('normal', () => {
    assert(isFunction(tagFunction));
  });

  it('error: the param is empty', () => {
    assert(!isFunction());
  });
});

describe('isUndefined', () => {
  it('normal', () => {
    assert(isUndefined(tagUndefined));
  });

  it('error: the param is empty', () => {
    assert(isUndefined());
  });
});

describe('isNull', () => {
  it('normal', () => {
    assert(isNull(tagNull));
  });

  it('error: the param is empty', () => {
    assert(!isNull());
  });
});
