/**
 * Helper functions
 */

// MS to DD:HH:MM:SS format
export function ddhhmmss(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    ms %= (24 * 60 * 60 * 1000);
    let hours = Math.floor(ms / (60 * 60 * 1000));
    ms %= (60 * 60 * 1000);
    let minutes = Math.floor(ms / (60 * 1000));
    ms %= (60 * 1000);
    let seconds = Math.floor(ms / 1000);

    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
}

// Miliseconds between two dates
export function msBetweenDates(d1, d2) {
    if (typeof d1 === "number") return Math.abs(d1 - d2);

    let ms1 = d1.getTime(),
        ms2 = d2.getTime();

    return Math.abs(ms1 - ms2);
}