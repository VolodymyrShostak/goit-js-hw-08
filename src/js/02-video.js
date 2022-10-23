import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoElement = document.querySelector('#vimeo-player');
const player = new Player(vimeoElement);
const STORAGE_KEY = 'videoplaayer-current-time';

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}

function getTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds.toFixed(1));
}
player.on('timeupdate', throttle(getTime, 1000));
