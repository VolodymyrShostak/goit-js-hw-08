import Player from '@vimeo/player';
const vimeoElement = document.querySelector('#vimeo-player');
const player = new Player(vimeoElement);
player.setCurrentTime(localStorage.getItem('videoplaayer-current-time'));
player.on('timeupdate', event => {
  localStorage.setItem('videoplaayer-current-time', event.seconds);
  console.log(localStorage);
});
