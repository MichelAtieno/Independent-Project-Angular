import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {


  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today);
    const dateDifference = todayWithNoTime - value;
    const secondsInDay = 86400;

    const dateDifferenceSeconds = dateDifference * 0.001;

    const dateCounter = dateDifferenceSeconds / secondsInDay;
    console.log(value);

    if (dateCounter >= 1) {
      return Math.round(dateCounter);
     } else { return 0; }
  }
// tslint:disable-next-line:eofline
}