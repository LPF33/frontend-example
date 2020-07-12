import * as DateFormat from './DateFormat';

describe('DateFormat', () => {
    describe('timestampToString', () => {
        it('de with default options', () => {
            expect(DateFormat.timestampToString(new Date('2019-01-01 15:30').getTime(), 'de')).toBe('1.1.2019');
        });
        it('en-gb with default options', () => {
            expect(DateFormat.timestampToString(new Date('2019-01-01 15:30').getTime(), 'en-GB')).toBe('01/01/2019');
        });
        it('en-us with default options', () => {
            expect(DateFormat.timestampToString(new Date('2019-01-01 15:30').getTime(), 'en-US')).toBe('1/1/2019');
        });
    });
    describe('timestampToDate', () => {
        it('de with default options', () => {
            expect(DateFormat.timestampToDate(new Date('2019-01-01 15:30').getTime(), 'de')).toBe('01.01.');
        });
        it('en-gb with default options', () => {
            expect(DateFormat.timestampToDate(new Date('2019-01-01 15:30').getTime(), 'en-GB')).toBe('01/01');
        });
        it('en-us with default options', () => {
            expect(DateFormat.timestampToDate(new Date('2019-01-01 15:30').getTime(), 'en-US')).toBe('1/1');
        });
    });
    describe('timestampToTime', () => {
        it('de with default options', () => {
            expect(DateFormat.timestampToTime(new Date('2019-01-01 15:30').getTime(), 'de')).toBe('15:30');
        });
        it('en-gb with default options', () => {
            expect(DateFormat.timestampToTime(new Date('2019-01-01 15:30').getTime(), 'en-GB')).toBe('15:30');
        });
        it('en-us with default options', () => {
            expect(DateFormat.timestampToTime(new Date('2019-01-01 15:30').getTime(), 'en-US')).toBe('3:30 PM');
        });
    });
    describe('millisecondsToFullMinutes', () => {
        it('de with default options', () => {
            const now = Date.now();
            const minutes = 30;
            expect(DateFormat.milliSecondsToFullinutes(now + minutes * 60 * 1000 - now)).toBe(minutes);
        });
    });
    describe('timestampToWeekday', () => {
        it('de with default options', () => {
            expect(DateFormat.timestampToWeekday(new Date('2020-07-11 15:30').getTime(), 'de')).toBe('Samstag');
        });
        it('en-gb with default options', () => {
            expect(DateFormat.timestampToWeekday(new Date('2020-07-11 15:30').getTime(), 'en-GB')).toBe('Saturday');
        });
        it('en-us with default options', () => {
            expect(DateFormat.timestampToWeekday(new Date('2020-07-10 15:30').getTime(), 'en-US')).toBe('Friday');
        });
    });
});
