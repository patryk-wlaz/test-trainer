import * as _ from 'lodash';

export const parseSearchVolume = (value: string | number): number => {
  if (_.isString(value)) {
    value = Number(value.replace(/,/g, '.').replace(/[^0-9\.]/g, ''));
  }

  if (value === 0) {
    return null;
  }

  return _.round(value);
};
