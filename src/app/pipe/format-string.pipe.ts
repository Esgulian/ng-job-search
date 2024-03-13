import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString',
  standalone: true,
})
export class FormatStringPipe implements PipeTransform {
  transform(values: string[]): string[] {
    if (values === null || values === undefined) {
      return values;
    }
    const newValues = values.map((value) => value.replace('&amp;', '&'));
    return newValues;
  }
}
