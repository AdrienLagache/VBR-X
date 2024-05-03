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
    'Sac à dos de sport officiel VBR',
    'Bonnet Officiel VBR',
    'Casquettes officielles VBR (avec ou sans damier)',
    'Doudoune officielle VBR',
    'Survêtement officiel VBR',
    'Veste officielle 2019 VBR réalisée par Fab Design. En coton et à capuche',
    'Maillot officiel VBR (2022/2023)',
    'Masque hygiénique officiel VBR',
    'Polo officiel VBR',
    'Polo officiel 2019 VBR réalisé par Fab Design',
    'Casquette racing officiel 2019 VBR rálisée par Fab Design',
    'Pantalon de survêtement officiel 2019 VBR réalisé par Fab Design',
    'Maillot vintage officiel VBR',
    'T-shirt officiel 2019 VBR réalisé par Fab Design',
  ],

  sliderPrices: [
    '35.00',
    '27.00',
    '20.00',
    '65.00',
    '0.00',
    '30.50',
    '45.00',
    '15.00',
    '39.00',
    '39.00',
    '20.00',
    '42.50',
    '39.00',
    '30.50',
  ],

  generateSliderImages() {
    const sliderContainer = document.querySelector('.slider');

    for (let i = 0; i < sliderAdds.sliderImages.length; i += 1) {
      const newSliderFigure = document.createElement('figure');
      newSliderFigure.classList.add('store-preview__card');
      sliderContainer.append(newSliderFigure);

      const newSliderImage = document.createElement('img');

      newSliderImage.src = `/assets/images/store/${sliderAdds.sliderImages[i]}`;
      newSliderImage.classList.add('slider__img');
      newSliderImage.alt = sliderAdds.sliderAlt[i];
      newSliderFigure.append(newSliderImage);

      const newSliderFigcaption = document.createElement('figcaption');
      newSliderFigcaption.classList.add('store-preview__card__subtitle');
      newSliderFigcaption.innerHTML = `${sliderAdds.sliderAlt[i]}<br/><strong>${sliderAdds.sliderPrices[i]}€</strong>`;
      newSliderFigure.append(newSliderFigcaption);
    }

    // const sessionImage = sessionStorage.getItem('mySliderImage');
    const myImageArr = document.querySelectorAll('.store-preview__card');

    // if (sessionImage !== null && parseInt(sessionImage) > 0) {
    //   const index = parseInt(sessionImage);
    //   if (index < myImageArr.length) {
    //     myImageArr[index].classList.add('slider__img--current');
    //   }
    // } else {
    myImageArr[0]?.classList.add('store-preview__card--current');
    // }
  },

  handlerPrevious() {
    const pictures = document.querySelectorAll('.store-preview__card');

    for (let i = 0; i < pictures.length; i += 1) {
      if (
        pictures[i].classList.contains('store-preview__card--current') &&
        i > 0
      ) {
        pictures[i].classList.remove('store-preview__card--current');
        pictures[i - 1].classList.add('store-preview__card--current');
        // sessionStorage.setItem('mySliderImage', i - 1);
        break;
      } else if (
        pictures[i].classList.contains('store-preview__card--current') &&
        i === 0
      ) {
        pictures[i].classList.remove('store-preview__card--current');
        pictures[pictures.length - 1].classList.add(
          'store-preview__card--current'
        );
        // sessionStorage.setItem('mySliderImage', 5);
        break;
      }
    }
  },

  handlerNext() {
    sliderAdds.pictures = document.querySelectorAll('.store-preview__card');
    const picturesArr = sliderAdds.pictures;
    for (let i = 0; i < picturesArr.length; i += 1) {
      if (
        picturesArr[i].classList.contains('store-preview__card--current') &&
        i < picturesArr.length - 1
      ) {
        picturesArr[i].classList.remove('store-preview__card--current');
        picturesArr[i + 1].classList.add('store-preview__card--current');
        // sessionStorage.setItem('mySliderImage', i + 1);
        break;
      } else if (
        picturesArr[i].classList.contains('store-preview__card--current') &&
        i === picturesArr.length - 1
      ) {
        picturesArr[i].classList.remove('store-preview__card--current');
        picturesArr[0].classList.add('store-preview__card--current');
        // sessionStorage.setItem('mySliderImage', 0);
        break;
      }
    }
  },

  init() {
    const previousButton = document.getElementsByClassName('slider__btn')[0];
    previousButton.addEventListener('click', sliderAdds.handlerPrevious);
    const nextButton = document.getElementsByClassName('slider__btn')[1];
    nextButton.addEventListener('click', sliderAdds.handlerNext);
  },
};

export default sliderAdds;
