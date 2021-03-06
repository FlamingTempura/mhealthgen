import { noise, DAY, WEEK } from '../utils';

export default {
	id: 'medicate',
	types: ['medicate'],
	precision: 0.01,
	name: 'Medication diary',
	reviewQuery: 'medication diary',
	description: 'The person took their medication and recorded it.',
	next: date => DAY + Math.abs(noise(date, DAY)) * WEEK // seconds until the next sample
};