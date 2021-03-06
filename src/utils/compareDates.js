 export const compareDates = (month, date) => {
    if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
        return 'Capricorn'
    } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
        return 'Aquarius'
    } else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
        return 'Pisces'
    } else if ((month === 3 && date >= 21) || (month === 4 && date <= 20)) {
        return 'Aries'
    } else if ((month === 4 && date >= 21) || (month === 5 && date <= 20)) {
        return 'Taurus'
    } else if ((month === 5 && date >= 21) || (month === 6 && date <= 21)) {
        return 'Gemini'
    } else if ((month === 6 && date >= 22) || (month === 7 && date <= 22)) {
        return 'Cancer'
    } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
        return 'Leo'
    } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
        return 'Virgo'
    } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
        return 'Libra'
    } else if ((month === 10 && date >= 23) || (month === 11 && date <= 22)) {
        return 'Scorpio'
    } else if ((month === 11 && date >= 23) || (month === 12 && date <= 21)) {
        return 'Sagittarius'
    }
}