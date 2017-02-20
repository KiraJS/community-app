import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(data: article[], searchString?: string): article[] {
    if (!searchString) {
      return data;
    }
    if (data === undefined) {
      return null;
    }
    return data.filter((item: article) => item.title.toLowerCase().includes(searchString.toLowerCase()));
  }
}
