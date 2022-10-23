import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoElement = document.querySelector('#vimeo-player');
const player = new Player(vimeoElement);
const STORAGE_KEY = 'videoplaayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(getTime, 1000));

function getTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds.toFixed(2));
}
