const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled');
const toggleButton =  document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider')

// FUNCTIONS

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

function skip() {
  console.log(this.dataset.skip); 
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function handleProgress() {
  const percent = (video.currentTime/video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e.offsetX);
  const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// EVENT LISTENERS

video.addEventListener('click', toggle);
toggleButton.addEventListener('click', toggle);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', handleProgress)

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
