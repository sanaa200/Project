import { Injectable } from '@angular/core';
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { getISOWeek } from 'date-fns';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  public override weekViewTitle({ date, locale }: DateFormatterParams): string {
    const year: string = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
    const month: string = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
    const weekNumber: string = getISOWeek(date).toString();
    return `Semaine ${weekNumber} de ${month} ${year}`;
  }
}