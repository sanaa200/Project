import {Injectable} from  '@angular/core';
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { getISOWeek } from 'date-fns';
import { DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeFr,'fr');

@Injectable({
  providedIn: 'root'
})
export class CustomDateFormatter extends CalendarDateFormatter {
    // public override weekViewTitle({ date, locale }: DateFormatterParams): string {
    //   const year: string = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
    //   const month: string = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
    //   const weekNumber: string = getISOWeek(date).toString();
    //   return `Semaine ${weekNumber} de ${month} ${year}`;
    // }
    public override monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
        const selectedLocale = locale !== null && locale !== undefined ? locale : 'en'; // Utilise 'en' si locale est null ou undefined
      
        const formattedDate = new DatePipe(selectedLocale).transform(date, 'EEE');
        return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
      }
    
      public override monthViewTitle({ date, locale }: DateFormatterParams): string {
        const selectedLocale = locale !== null && locale !== undefined ? locale : 'en'; // Utilise 'en' si locale est null
      
        const formattedDate = new DatePipe(selectedLocale).transform(date, 'MMM y');
        return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
      }
      public override weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
        const selectedLocale = locale !== null && locale !== undefined ? locale : 'en';// Utilise 'en' si locale est undefined
        const formattedDate = new DatePipe(selectedLocale).transform(date, 'EEE');
        return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
      }
    
      public override dayViewHour({ date, locale }: DateFormatterParams): string {
        // const selectedLocale = locale !== null && locale !== undefined ? locale : 'en';// Utilise 'en' si locale est undefined
        // const formattedDate = new DatePipe(selectedLocale).transform(date, 'HH:mm');
        // return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
       return new Intl.DateTimeFormat(locale,{hour: 'numeric' , minute : 'numeric'}).format(date);
      }
      public override weekViewHour({ date, locale}:  DateFormatterParams): string {
        // const selectedLocale = locale !== null && locale !== undefined ? locale : 'en';// Utilise 'en' si locale est undefined
        // const formattedDate = new DatePipe(selectedLocale).transform(date, 'HH:mm');
        // return formattedDate !== null ? formattedDate : '';
        return new Intl.DateTimeFormat(locale,{hour: 'numeric' , minute : 'numeric'}).format(date);
      }
      public override dayViewTitle({ date, locale }: DateFormatterParams): string {
        const selectedLocale = locale !== null && locale !== undefined ? locale : 'en'; // Utilise 'en' si locale est null
      
        const formattedDate = new DatePipe(selectedLocale).transform(date, 'HH:mm:ss');
        return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
      }
    //   public override weekViewTitle({ date, locale }: DateFormatterParams): string {
    //     const selectedLocale = locale !== null && locale !== undefined ? locale : 'en'; // Utilise 'en' si locale est undefined
      
    //     const formattedDate = new DatePipe(selectedLocale).transform(date, 'HH:mm:ss');
    //     return formattedDate !== null ? formattedDate : ''; // Vérifie si la date formatée n'est pas null avant de la retourner
    //   }

    public override weekViewTitle({ date, locale }: DateFormatterParams): string {
        const year: string = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
        const month: string = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
        // const weekNumber: string = getISOWeek(date).toString();
        // return `Semaine ${weekNumber} de ${month} ${year}`;
        return ` ${month} / ${year}`;
      }

  }