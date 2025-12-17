import { percent, toFixed, isNumber, randomNum, fmtNumber } from './number';
import groupArray from './groupArray';
import {
  convert3857ToWGS84, appendCentroid, calculateCentroid,
  convertWGS84To3857, getDistanceByLatlng
} from './geo';
import { createCircle, createSquare, calculateRadiusEnd, createSector } from './geo';

import genList from './genList';
import jsonp from './jsonp';
import { getIdxByRange } from './getIdxByRange';

export {
  percent, toFixed, isNumber, randomNum, fmtNumber, groupArray,
  convert3857ToWGS84, convertWGS84To3857, appendCentroid, calculateCentroid,
  getDistanceByLatlng, createCircle, createSquare, calculateRadiusEnd,
  createSector,
  genList, jsonp,
  getIdxByRange,
}

export { default as randomStr } from './randomStr';
export { default as getType } from './getType';
export { default as isBigger } from './isBigger';
export { default as isJsonString } from './isJsonString';
export { default as jsonParse } from './jsonParse';
export { default as nonEmptyArr } from './nonEmptyArr';
export { default as reverseArr } from './reverseArr';
export { default as stringEllipsis } from './stringEllipsis';
export { default as timeFormat } from './timeFormat';
export { default as validFunc } from './validFunc';
export { default as isIdentityCard } from './isIdentityCard';
export { default as isPhoneNumber } from './isPhoneNumber';
export { default as linearScale } from './linearScale';
export { default as range2Arr } from './range2Arr';
export { default as sleep } from './sleep';
export { default as stringRealLen } from './stringRealLen';
export { default as urlFormat } from './urlFormat';
export { default as getDomScale, DomScale } from './getDomScale';
