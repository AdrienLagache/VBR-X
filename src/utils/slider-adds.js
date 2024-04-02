const sliderAdds = {
  sliderImages: [
    'shop-backpack.webp',
    'shop-bonnet.webp',
    'shop-cap.webp',
    'shop-doudoune.webp',
    'shop-full_tracksuit.webp',
    'shop-jacket.webp',
    'shop-jersey.webp',
    'shop-mask.webp',
    'shop-polo.webp',
    'shop-polo2019.webp',
    'shop-racing_cap.webp',
    'shop-tracksuit_pant.webp',
    'shop-tshirt.webp',
    'shop-tshirt2019.webp',
  ],

  sliderAlt: [
    'le sac à dos',
    'le bonnet',
    'la casquette RX',
    'la doudoune',
    'le jogging complet',
    'la veste',
    'le maillot officiel',
    'le masque VBR',
    'le polo classique',
    'le polo 2019',
    'la casquette racing',
    'le pantalon de jogging',
    'le t-shirt',
    'le t-shirt 2019',
  ],

  generateSliderImages: function () {
    console.log('on est dans generateSliderImages()');
    const sliderContainer = document.querySelector('.slider');

    for (let i = 0; i < sliderAdds.sliderImages.length; i++) {
      const newSliderImage = document.createElement('img');

      newSliderImage.src = 'assets/images/store/' + sliderAdds.sliderImages[i];
      newSliderImage.classList.add('slider__img');
      newSliderImage.alt = sliderAdds.sliderAlt[i];

      sliderContainer.append(newSliderImage);
    }

    const sessionImage = sessionStorage.getItem('mySliderImage');
    const myImageArr = document.querySelectorAll('.slider__img');

    if (sessionImage > 0) {
      myImageArr[sessionImage].classList.add('slider__img--current');
    } else {
      myImageArr[0].classList.add('slider__img--current');
    }
  },

  handlerPrevious: function () {
    const pictures = document.querySelectorAll('.slider__img');

    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].classList.contains('slider__img--current') && i > 0) {
        pictures[i].classList.remove('slider__img--current');
        pictures[i - 1].classList.add('slider__img--current');
        sessionStorage.setItem('mySliderImage', i - 1);
        break;
      } else if (
        pictures[i].classList.contains('slider__img--current') &&
        i === 0
      ) {
        pictures[i].classList.remove('slider__img--current');
        pictures[pictures.length - 1].classList.add('slider__img--current');
        sessionStorage.setItem('mySliderImage', 5);
        break;
      }
    }
  },

  handlerNext: function () {
    sliderAdds.pictures = document.querySelectorAll('.slider__img');
    const picturesArr = sliderAdds.pictures;
    for (let i = 0; i < picturesArr.length; i++) {
      if (
        picturesArr[i].classList.contains('slider__img--current') &&
        i < picturesArr.length - 1
      ) {
        picturesArr[i].classList.remove('slider__img--current');
        picturesArr[i + 1].classList.add('slider__img--current');
        sessionStorage.setItem('mySliderImage', i + 1);
        break;
      } else if (
        picturesArr[i].classList.contains('slider__img--current') &&
        i === picturesArr.length - 1
      ) {
        picturesArr[i].classList.remove('slider__img--current');
        picturesArr[0].classList.add('slider__img--current');
        sessionStorage.setItem('mySliderImage', 0);
        break;
      }
    }
  },

  init: function () {
    const previousButton = document.getElementsByClassName('slider__btn')[0];
    previousButton.addEventListener('click', sliderAdds.handlerPrevious);
    const nextButton = document.getElementsByClassName('slider__btn')[1];
    nextButton.addEventListener('click', sliderAdds.handlerNext);
  },
};

export default sliderAdds;
