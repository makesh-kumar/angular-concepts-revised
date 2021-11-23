import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MakeUpper',
  pure: false,
})
export class MakeUpperPipe implements PipeTransform {
  transform(value: any[], ...args: any[]) {
    return value.map((val) => val.toString().toUpperCase());
  }
}
