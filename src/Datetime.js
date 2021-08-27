export default function DateTime({ $target }) {
  this.$target = $target;

  this.render = () => {
    const { year, month, date, day, hours, minutes } = getCurrentDateTime();

    this.$target.innerHTML = `
    <div class="date">
        <span>${date}</span>
        <div class="date__middle">
          <span>${month}</span>
          <span>${year}</span>
        </div>
        <span>${day}</span>
    </div>
    <div class="time">${hours}:${minutes} ${hours > 12 ? "PM" : "AM"}</div>
`;
  };
  this.render();

  setInterval(() => {
    this.render();
  }, 1000);
}

function convertToZeroPad(digit) {
  return `${digit}`.padStart(2, "0");
}

function getCurrentDateTime() {
  const today = new Date();
  const currentDateTime = {
    year: today.getFullYear(),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(today),
    date: convertToZeroPad(today.getDate()),
    day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(today),
    hours: today.getHours() % 12,
    minutes: (today.getMinutes() < 10 ? "0" : "") + today.getMinutes(),
  };
  return currentDateTime;
}
