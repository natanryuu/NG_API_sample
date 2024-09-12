import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2ntd',
  standalone: true
})
export class Usd2ntdPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    return value*32;
  }

}
