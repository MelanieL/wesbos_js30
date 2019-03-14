// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
// [data-skip] means anything that has a data-skip attribute
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions

function togglePlay() {
    // if(video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
    // Can also do it this way:
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    // can use this because it's bound to the video
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// Speed at which the video plays
function handleRangeUpdate() {
    // console.log(this.value);
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

// Progress bar visual
function handleProgress() {
    // Updating the flex basis value to correspond with location in video
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// The scrub (where to play the video when we click on the progress bar)
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// This adds real time, not just when we let go
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Use a flag variable so that the bar doesn't update without a click
let mousedown = false;
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', scrub);
// Instead, check first variable and then move on:
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// When someone clicks mouse, sets mousedown to true
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

