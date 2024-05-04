/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import imagesSlider from '../../utils/images-slider';
import useScrollTo from '../useScrollTo/useScrollTo';

import './LifeStyle.scss';

function LifeStyle(): JSX.Element {
  const [loadingCount, setLoadingCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useScrollTo(0, 0);

  useEffect(() => {
    const themeObj = [
      imagesSlider.lifeStyleVirtuelReel,
      imagesSlider.champions,
      imagesSlider.equipements,
    ];

    const fetchImages = async (obj: object) => {
      await imagesSlider.generateSliderImages(obj);
      if (loadingCount < 2) {
        setLoadingCount(loadingCount + 1);
      }
    };
    fetchImages(themeObj[loadingCount]);

    if (loadingCount === 2 && loaded === false) {
      setLoaded(true);
    }
  }, [loaded, loadingCount]);

  return (
    <section className="vbr">
      <div className="life-style">
        <h1 className="life-style__title">
          Parce que chez VBR, il n&apos;y a toujours eu qu&apos;un pas du
          virtuel au réel...
        </h1>
        <aside className="slider slider--life-style">
          <div className="slider-btn">
            <div
              className="slider-btn__item"
              role="contentinfo"
              aria-label="Précédent"
              onKeyDown={(e) => {
                return e.target;
              }}
              onClick={() => {
                imagesSlider.handlerPrevious('life-style');
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
                imagesSlider.handlerNext('life-style');
              }}
            >
              <div className="details-links__bindweed--right" />
              <p className="details-links__text">Suivant</p>
            </div>
            {!loaded && <Loader />}
          </div>
        </aside>
      </div>

      <div className="life-style">
        <h1 className="life-style__title">
          Des Guépards avec les plus grands champions mondiaux
        </h1>
        <aside className="slider slider--champions">
          <div className="slider-btn">
            <div
              className="slider-btn__item"
              role="contentinfo"
              aria-label="Précédent"
              onKeyDown={(e) => {
                return e.target;
              }}
              onClick={() => {
                imagesSlider.handlerPrevious('champions');
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
                imagesSlider.handlerNext('champions');
              }}
            >
              <div className="details-links__bindweed--right" />
              <p className="details-links__text">Suivant</p>
            </div>
            {!loaded && <Loader />}
          </div>
        </aside>
      </div>

      <div className="life-style">
        <h1 className="life-style__title">
          Des accessoires VBR, des playseats VBR, des vétements VBR, des
          rally-cars VBR... Et bien + encore !!!
        </h1>
        <aside className="slider slider--equipements">
          <div className="slider-btn">
            <div
              className="slider-btn__item"
              role="contentinfo"
              aria-label="Précédent"
              onKeyDown={(e) => {
                return e.target;
              }}
              onClick={() => {
                imagesSlider.handlerPrevious('equipements');
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
                imagesSlider.handlerNext('equipements');
              }}
            >
              <div className="details-links__bindweed--right" />
              <p className="details-links__text">Suivant</p>
            </div>
            {!loaded && <Loader />}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default LifeStyle;
