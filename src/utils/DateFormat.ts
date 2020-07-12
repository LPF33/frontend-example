export function timestampToString(timestamp: number, language?: string, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(language, options).format(timestamp);
}

export function timestampToDate(timestamp: number, language?: string): string {
    return timestampToString(timestamp, language, {month: '2-digit', day: '2-digit'});
}

export function timestampToTime(timestamp: number, language?: string): string {
    return timestampToString(timestamp, language, {hour: 'numeric', minute: 'numeric'});
}

export function milliSecondsToFullinutes(milliseconds: number) {
    return Math.ceil(milliseconds / 60 / 1000);
}

export function timestampToWeekday(timestamp: number, language?: string): string {
    return timestampToString(timestamp, language, {weekday: 'long'});
}
