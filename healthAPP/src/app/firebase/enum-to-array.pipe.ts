import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: Object) {
    const keys = Object.keys(value);
    const filtered = keys.filter((_, index) => index >= (keys.length / 2));
    return filtered
  }

}
