import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, prop?: string, order?: string): Array<any> {
    if (prop && order) {
      return value.sort((a, b) => {
        if (a[prop].toString().toLowerCase() < b[prop].toString().toLowerCase()) {
          if (order === 'asc') {
            return -1;
          } else if (order === 'desc') {
            return 1;
          }
        } else if (a[prop].toString().toLowerCase() > b[prop].toString().toLowerCase()) {
          if (order === 'asc') {
            return 1;
          } else if (order === 'desc') {
            return -1;
          }
        }
      });
    } else {
      return value;
    }
  }
}
