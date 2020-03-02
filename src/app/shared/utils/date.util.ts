import moment from 'moment';

export function getCurrentDate(): Date {
  return moment().toDate();
}

export function getCurrentDateString(): string {
  return dateToString(getCurrentDate());
}

export function dateToString(date: Date, format: string = ''): string {
  return moment(date).format(format);
}

export function dateToStringUtc(date: Date | string, format: string = ''): string {
  return moment(date).format(format);
}

export function isDateValid(date: Date | string): boolean {
  return moment(date).isValid();
}
