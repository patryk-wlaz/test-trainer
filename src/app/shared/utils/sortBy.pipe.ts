/*
 *ngFor="let smth of arr | sortBy:'name':'desc'"
 *ngFor="let smth of arr | sortBy:'name'"
*/

import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(data: any[], property: string, order = 'asc') {
    if (
      !data
      || !_.isArray(data)
      || _.isEmpty(data)
      || !property
      || (order !== 'asc' && order !== 'desc')
    ) { return data; }
    return _.orderBy(data, [property], [order]);
  }
}
