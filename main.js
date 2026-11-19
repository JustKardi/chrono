const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function tickClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  secondHand.setAttribute('transform', `rotate(${secondDeg}, 0, 0)`);
  minuteHand.setAttribute('transform', `rotate(${minuteDeg}, 0, 0)`);
  hourHand.setAttribute('transform', `rotate(${hourDeg}, 0, 0)`);
}

tickClock();
setInterval(tickClock, 1000);
