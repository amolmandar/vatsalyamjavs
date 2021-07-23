import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    let values = []
    for (let key in value) {
      values.push(value[key])
    }
    return values;
  }

}
