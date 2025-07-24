const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progessBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggleButton =  document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('.player__button');

function toggle() {
  
  // video.paused ? video.play() : video.pause();

  const method = video.paused ? 'play' : 'pause';
  video[method]();
 } 
 
function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  console.log(icon);
  toggleButton.textContent = icon;
}


video.addEventListener('click', toggle);
toggleButton.addEventListener('click', toggle);

video.addEventListener('play', updateButton);