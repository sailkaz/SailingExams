import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDatepipe'
})
export class CustomDatepipe extends
DatePipe implements PipeTransform {

  override transform (value: any, args?: any): any {
    return super.transform(value, "dd.MM.yyyy ");;
  }

}
