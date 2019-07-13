import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthDisplay'
})
export class MonthDisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[value-1];
  }
}
