import { useEffect } from 'react';
import sliderAdds from '../../utils/slider-adds';

import './Store-preview.scss';

function StorePreview(): JSX.Element {
  useEffect(() => {
    // const sliderContainer = document.querySelector('.slider');

    // for (let i = 0; i < sliderAdds.sliderImages.length; i++) {
    //   const newSliderFigure = document.createElement('figure');
    //   newSliderFigure.classList.add('store-preview__card');
    //   sliderContainer ? sliderContainer.append(newSliderFigure) : '';

    //   const newSliderImage = document.createElement('img');

    //   newSliderImage.src = 'assets/images/store/' + sliderAdds.sliderImages[i];
    //   newSliderImage.classList.add('slider__img');
    //   newSliderImage.alt = sliderAdds.sliderAlt[i];
    //   newSliderFigure.append(newSliderImage);

    //   const newSliderFigcaption = document.createElement('figcaption');
    //   newSliderFigcaption.classList.add('store-preview__card__subtitle');
    //   newSliderFigure.append(newSliderFigcaption);
    // }

    // const sessionImage = sessionStorage.getItem('mySliderImage');
    // const myImageArr = document.querySelectorAll('.slider__img');

    // if (sessionImage !== null && parseInt(sessionImage) > 0) {
    //   const index = parseInt(sessionImage);
    //   if (index < myImageArr.length) {
    //     myImageArr[index].classList.add('slider__img--current');
    //   }
    // } else {
    //   myImageArr[0]?.classList.add('slider__img--current');
    // }
    sliderAdds.generateSliderImages();

    sliderAdds.init();
  }, []);

  return (
    <section className="store-preview">
      <h1 className="store-preview__title">Nos produits</h1>
      <section className="slider">
        <button
          className="btn slider__btn"
          type="button"
          aria-label="Précédent"
        >
          &lt;
        </button>
        <button className="btn slider__btn" type="button" aria-label="Suivant">
          &gt;
        </button>
      </section>
      {/* <div className="store-preview__container">
        <span className="store-preview__previous">&lt;</span>
        <figure className="store-preview__card">
          <img
            className="store-preview__card__pic"
            src="./assets/images/store/shop-tshirt.webp"
            alt="le t-shirt VBR"
          />
          <figcaption className="store-preview__card__subtitle">
            T-shirt officiel VBR
            <br />
            <strong>39,00€</strong>
          </figcaption>
        </figure>
        <span className="store-preview__next">&gt;</span>
      </div> */}
    </section>
  );
}

export default StorePreview;
