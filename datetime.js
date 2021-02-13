function convertToZeroPad(digit) {
    return `${digit}`.padStart(2, '0');
}

export function getCurrentDateTime() {
    const today = new Date();
    const currentDateTime = {
        year: today.getFullYear(),
        month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today),
        date: convertToZeroPad(today.getDate()),
        day: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today)
    }
    return currentDateTime
}


// setInterval(function () { 
//     const curDateTime = getCurrentDateTime();
//     console.log(curDateTime);
// }, 1000);