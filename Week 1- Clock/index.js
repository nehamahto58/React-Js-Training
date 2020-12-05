const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const timeNowIs = new Date();

  const seconds = timeNowIs.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90; // +90 to offset the default value set in transform property of hand class style
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = timeNowIs.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = timeNowIs.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
