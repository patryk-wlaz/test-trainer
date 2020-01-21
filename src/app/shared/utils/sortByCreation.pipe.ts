/*
 *ngFor="let smth of arr | sortByCreation:'desc'"
 *ngFor="let smth of arr | sortByCreation"
*/

import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'sortByCreation' })
export class SortByCreationPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(data: any[], order = 'asc') {
    if (
      !data
      || !_.isArray(data)
      || _.isEmpty(data)
      || (order !== 'asc' && order !== 'desc')
    ) { return data; }
    return _.orderBy(data, ['createdAt', 'name'], [order, order]);
  }
}
