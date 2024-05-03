/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import imagesSlider from '../../utils/images-slider';
import './LifeStyle.scss';

function LifeStyle(): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    imagesSlider.generateSliderImages(imagesSlider.lifeStyleVirtuelReel);
    imagesSlider.generateSliderImages(imagesSlider.champions);
    setLoaded(true);
  }, [loaded]);

  return (
    <section className="vbr">
      <div className="life-style">
        <h1 className="life-style__title">
          Parce que chez VBR, il n&apos;y a toujours eu qu&apos;un pas du
          virtuel au réel
        </h1>
        {/* changer ici */}
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
          </div>
        </aside>
      </div>
      <div className="life-style">
        <h1 className="life-style__title">
          Des Guépards avec les plus grands champions mondiaux
        </h1>
        {/* changer ici */}
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
          </div>
        </aside>
      </div>
    </section>
  );
}

export default LifeStyle;
