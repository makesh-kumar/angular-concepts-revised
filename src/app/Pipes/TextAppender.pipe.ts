import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'appendText',
})
export class TextAppenderPipe implements PipeTransform {
  transform(input: any, ...args: any[]) {
    return `${input} ${args.join('<->')}`;
  }
}
