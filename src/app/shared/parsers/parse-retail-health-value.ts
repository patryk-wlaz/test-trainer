import * as _ from 'lodash';
import { MAX_RH, MIN_RH } from '@common/products';

export const parseRhValue = (value: number | string): number => {
  if (_.isString(value)) {
    value = Number(value.replace(/,/g, '.').replace(/[^0-9\.]/g, ''));
  }
  if (value < MIN_RH || !_.isNumber(value)) {
    value = MIN_RH;
  }
  if (value > MAX_RH || !_.isNumber(value)) {
    value = MAX_RH;
  }

  return _.round(value, 2);
};
