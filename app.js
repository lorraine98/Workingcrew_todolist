const dateTime = document.querySelector('.js-dateTime');

import { getCurrentDateTime } from '/datetime.js'

console.log(getCurrentDateTime());

function init() {
    getCurrentDateTime()
}

init();
