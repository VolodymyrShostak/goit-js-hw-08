import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoElement = document.querySelector('#vimeo-player');
const player = new Player(vimeoElement);
const STORAGE_KEY = 'videoplaayer-current-time';
player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then();
const getTime = event => {
  localStorage.setItem(STORAGE_KEY, event.seconds);
};
player.on('timeupdate', throttle(getTime, 1000));