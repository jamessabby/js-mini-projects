const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // SECONDS
  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90);           // we initially offset it by 90 degrees (default left to right) so the second hand 
                                                                // still didn't fully rotated even when near 60 seconds, so we added 90 to make it top to bottom
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // MINUTES
  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes / 60) * 360) + 90);

  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // HOURS 
  const hours = now.getHours();
  const hoursDegrees = (((hours / 12) * 360) + 90);

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(`${hours}` + ": " + `${minutes}` + ": " + `${seconds}`);
}




setInterval(setDate, 1000) //runs the first parameter every 1 second