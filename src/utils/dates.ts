import moment from 'moment';

export const dateDiff = (date: number): string => moment.unix(date).fromNow();
