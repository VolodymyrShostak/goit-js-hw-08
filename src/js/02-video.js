import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoElement = document.querySelector('#vimeo-player');
const player = new Player(vimeoElement);
const STORAGE_KEY = 'videoplaayer-current-time';
if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
player.on('timeupdate', throttle(getTime, 1000));

const getTime = event => {
  localStorage.setItem(STORAGE_KEY, event.seconds);
  console.log(event.seconds);
};
