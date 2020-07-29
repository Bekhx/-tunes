export const radioPlayerInit = () => {
   const radio = document.querySelector('.radio');
   const radioCoverImg = document.querySelector('.radio-cover__img');
   const radioNavigation = document.querySelector('.radio-navigation');
   const radioHeaderBig = document.querySelector('.radio-header__big');
   const radioItem = document.querySelectorAll('.radio-item');
   const radioStop = document.querySelector('.radio-stop');

   const audio = new Audio();
   audio.type = audio;

   radioStop.disabled = true;

   const changeIconPlay = () => {
      if(audio.paused) {
         radio.classList.remove('play');
         radioStop.classList.add('fa-play');
         radioStop.classList.remove('fa-stop');
      }else {
         radio.classList.add('play');
         radioStop.classList.remove('fa-play');
         radioStop.classList.add('fa-stop');
      };
   };

   const selectItem = elem => {
      radioItem.forEach( item => item.classList.remove('select'));
      elem.classList.add('select');
   }

   radioNavigation.addEventListener('change', event => {
      const target = event.target;
      const parrent = target.closest('.radio-item');
      const urlImg = parrent.querySelector('.radio-img').src;
      const title = parrent.querySelector('.radio-name').textContent;

      radioHeaderBig.textContent = title;
      radioCoverImg.src = urlImg;
      radioStop.disabled = false;
      audio.src = target.dataset.radioStantion;

      audio.play();
      changeIconPlay();
      selectItem(parrent);
   });

   const radioPlay = () => {
      if (radio.paused) {
         audio.play();
      } else {
         audio.pause();
      };
      changeIconPlay();
   };
   radioStop.addEventListener('click', radioPlay);
};
