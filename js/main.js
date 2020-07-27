import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { radioPlayerInit } from './radioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivatePlayer = () => {
   playerBtn.forEach(item => item.classList.remove('active'));
   playerBlock.forEach(item => item.classList.remove('active'));
   temp.style.display = 'none';
};

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
      deactivatePlayer();
      btn.classList.add('active');
      playerBlock[i].classList.add('active');
   }));

videoPlayerInit();
musicPlayerInit();
radioPlayerInit();
