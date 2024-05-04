/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import useScrollTo from '../useScrollTo/useScrollTo';

import './Store-preview.scss';
import imagesSlider from '../../utils/images-slider';
import Loader from '../Loader/Loader';

function StorePreview(): JSX.Element {
  const [loadingCount, setLoadingCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useScrollTo(0, 0);

  useEffect(() => {
    const themeObj = [imagesSlider.products];

    const fetchImages = async (obj: object) => {
      await imagesSlider.generateSliderImages(obj);
      if (loadingCount < 1) {
        setLoadingCount(loadingCount + 1);
      }
    };
    fetchImages(themeObj[loadingCount]);

    if (loadingCount === 1 && loaded === false) {
      setLoaded(true);
    }
  }, [loaded, loadingCount]);

  return (
    <section className="store-preview">
      <h1 className="store-preview__title">Nos produits</h1>
      <aside className="slider slider--products">
        <div className="slider-btn">
          <div
            className="slider-btn__item"
            role="contentinfo"
            aria-label="Précédent"
            onKeyDown={(e) => {
              return e.target;
            }}
            onClick={() => {
              imagesSlider.handlerPrevious('products');
            }}
          >
            <div className="details-links__bindweed" />
            <p className="details-links__text">Précédent</p>
          </div>
          <div
            className="slider-btn__item"
            role="contentinfo"
            aria-label="Suivant"
            onKeyDown={(e) => {
              return e.target;
            }}
            onClick={() => {
              imagesSlider.handlerNext('products');
            }}
          >
            <div className="details-links__bindweed--right" />
            <p className="details-links__text">Suivant</p>
          </div>
          {!loaded && <Loader />}
        </div>
      </aside>
    </section>
  );
}

export default StorePreview;
