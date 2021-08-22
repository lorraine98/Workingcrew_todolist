function convertToZeroPad(digit) {
    return `${digit}`.padStart(2, '0');
}

function getCurrentDateTime() {
    const today = new Date();
    const currentDateTime = {
        year: today.getFullYear(),
        month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today),
        date: convertToZeroPad(today.getDate()),
        day: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today)
    }
    return currentDateTime
}


setInterval(function () {
    const curDateTime = getCurrentDateTime();
    // console.log(curDateTime);
}, 1000);

const dateTimeHTML = `
    <div class="date">
        <span>${date}</span>
        <div class="date__middle">
          <span>${month}</span>
          <span>${year}</span>
        </div>
        <span>${day}</span>
    </div>
    <div class="time">03:52 PM</div>
`

export function renderDateTime() {
    const $dateTime = document.querySelector('.date_time');
    $dateTime.innerHTML = dateTimeHTML;
}
