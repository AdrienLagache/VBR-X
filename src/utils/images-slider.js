const imagesSlider = {
  products: {
    classNameSuffix: 'products',
    isFigcaption: true,
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
  },

  lifeStyleVirtuelReel: {
    classNameSuffix: 'life-style',
    sliderImages: [
      'vr1.webp',
      'vr2.webp',
      'vr3.webp',
      'vr4.webp',
      'vr5.webp',
      'vr6.webp',
      'vr7.webp',
      'vr8.webp',
      'vr9.webp',
      'vr10.webp',
      'vr11.webp',
      'vr12.webp',
      'vr13.webp',
      'vr14.webp',
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
  },

  champions: {
    classNameSuffix: 'champions',
    sliderImages: [
      'ch1.webp',
      'ch2.webp',
      'ch3.webp',
      'ch4.webp',
      'ch5.webp',
      'ch6.webp',
      'ch7.webp',
      'ch8.webp',
      'ch9.webp',
      'ch10.webp',
      'ch11.webp',
      'ch12.webp',
      'ch13.webp',
      'ch14.webp',
      'ch15.webp',
      'ch16.webp',
      'ch17.webp',
      'ch18.webp',
      'ch19.webp',
      'ch20.webp',
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
  },

  equipements: {
    classNameSuffix: 'equipements',
    sliderImages: [
      'eq1.webp',
      'eq2.webp',
      'eq3.webp',
      'eq4.webp',
      'eq5.webp',
      'eq6.webp',
      'eq7.gif',
      'eq8.webp',
      'eq9.webp',
      'eq10.webp',
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
  },

  async generateSliderImages(obj) {
    const sliderContainer = document.querySelector(
      `.slider--${obj.classNameSuffix}`
    );
    const promises = [];

    for (let i = 0; i < obj.sliderImages.length; i += 1) {
      const newSliderFigure = document.createElement('figure');

      newSliderFigure.classList.add(`slider__card--${obj.classNameSuffix}`);
      newSliderFigure.classList.add(`slider__card`);
      sliderContainer.append(newSliderFigure);

      const newSliderImage = document.createElement('img');

      newSliderImage.src = `/assets/images/sliders/${obj.sliderImages[i]}`;
      newSliderImage.classList.add('slider__img');
      newSliderImage.alt = obj.sliderAlt[i];
      newSliderFigure.append(newSliderImage);

      if (obj.isFigcaption) {
        const newSliderFigcaption = document.createElement('figcaption');
        newSliderFigcaption.classList.add('store-preview__card__subtitle');
        newSliderFigcaption.innerHTML = `${obj.sliderAlt[i]}<br/><strong>${obj.sliderPrices[i]}€</strong>`;
        newSliderFigure.append(newSliderFigcaption);
      }

      // Push each Promise into the array
      const promise = new Promise((resolve) => {
        newSliderImage.onload = () => resolve();
      });
      promises.push(promise);
    }
    // Wait for all promises to resolve
    await Promise.all(promises);

    const myImageArr = document.querySelectorAll(
      `.slider__card--${obj.classNameSuffix}`
    );
    myImageArr[0]?.classList.add(`slider__card--current`);
  },

  handlerPrevious(suffix) {
    const pictures = document.querySelectorAll(`.slider__card--${suffix}`);

    for (let i = 0; i < pictures.length; i += 1) {
      if (pictures[i].classList.contains('slider__card--current') && i > 0) {
        pictures[i].classList.remove('slider__card--current');
        pictures[i - 1].classList.add('slider__card--current');
        break;
      } else if (
        pictures[i].classList.contains('slider__card--current') &&
        i === 0
      ) {
        pictures[i].classList.remove('slider__card--current');
        pictures[pictures.length - 1].classList.add('slider__card--current');
        break;
      }
    }
  },

  handlerNext(suffix) {
    const pictures = document.querySelectorAll(`.slider__card--${suffix}`);

    for (let i = 0; i < pictures.length; i += 1) {
      if (
        pictures[i].classList.contains('slider__card--current') &&
        i < pictures.length - 1
      ) {
        pictures[i].classList.remove('slider__card--current');
        pictures[i + 1].classList.add('slider__card--current');
        break;
      } else if (
        pictures[i].classList.contains('slider__card--current') &&
        i === pictures.length - 1
      ) {
        pictures[i].classList.remove('slider__card--current');
        pictures[0].classList.add('slider__card--current');
        break;
      }
    }
  },
  // init() {
  //   const previousButton = document.querySelectorAll('.slider-btn__item')[0];
  //   previousButton.addEventListener('click', imagesSlider.handlerPrevious);
  //   const nextButton = document.querySelectorAll('.slider-btn__item')[1];
  //   nextButton.addEventListener('click', imagesSlider.handlerNext);
  // },
};

export default imagesSlider;
