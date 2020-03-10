import moment from 'moment';

export function getMoment(): moment.Moment {
  return moment();
}

export function getCurrentDate(): Date {
  return getMoment().toDate();
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

export function isSameOrBeforeNow(timestamp: number): boolean {
  return moment.unix(timestamp).isSameOrBefore(getMoment());
}

export function isSameOrAfterNow(timestamp: number): boolean {
  return moment.unix(timestamp).isSameOrAfter(getMoment());
}
