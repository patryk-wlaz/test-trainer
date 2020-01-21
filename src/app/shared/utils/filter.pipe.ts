import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(data: any[], values) {
    return (data && _.isArray(data))
      ? data.filter(item => _.every(_.keys(values), key => item[key] === values[key]))
      : data;
  }
}
