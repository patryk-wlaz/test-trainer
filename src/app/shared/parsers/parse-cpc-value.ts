import * as _ from 'lodash';

const minCPC = 0.01;

export const parseCpcValue = (value: number | string): number => {
  if (_.isString(value)) {
    value = Number(value.replace(/,/g, '.').replace(/[^0-9\.]/g, ''));
  }
  if (value < minCPC || !_.isNumber(value)) {
    value = minCPC;
  }

  return _.round(value, 2);
};
