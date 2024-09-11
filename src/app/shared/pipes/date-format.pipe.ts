import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string | number, args: string = 'dd/MM/yyyy'): any {
    if (value instanceof Date) {
      const datePipe = new DatePipe('es-CO');
      return datePipe.transform(value, args);
    }
    return value;
  }
}


