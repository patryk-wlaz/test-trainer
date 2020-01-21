import * as _ from 'lodash';

const minCTR = 0;
const maxCTR = 100;

export const parseCtrValue = (value: string | number): number => {
  if (_.isString(value)) {
    value = Number(value.replace(/,/g, '.').replace(/[^0-9\.]/g, ''));
  }
  if (value < minCTR || !_.isNumber(value)) {
    value = minCTR;
  }
  if (value > maxCTR) {
    value = maxCTR;
  }

  return _.round(value, 1);
};
