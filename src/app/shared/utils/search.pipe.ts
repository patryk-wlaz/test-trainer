import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(data: any[], values) {
    return (data && _.isArray(data))
      ? data.filter((item) => _.every(_.keys(values), key => {
        return _.toLower(item[key]).indexOf(_.toLower(values[key])) > -1;
      }))
      : data;
  }
}
