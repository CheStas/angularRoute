import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, query?: string): Array<any> {
    if (query === undefined) {
      return value;
    }

    return value.filter(el => {
      if (el.name.toString().toLowerCase().includes(query.toLowerCase()) ||
          el.lastName.toString().toLowerCase().includes(query.toLowerCase()) ||
          el.email.toString().toLowerCase().includes(query.toLowerCase())) {
            return true;
      } else {
        return false;
      }
    });
  }

}
