import { useEffect } from 'react';
import sliderAdds from '../../utils/slider-adds';

import './Store-preview.scss';

function StorePreview(): JSX.Element {
  useEffect(() => {
    sliderAdds.generateSliderImages();

    sliderAdds.init();
  }, []);

  return (
    <section className="store-preview">
      <h1 className="store-preview__title">Nos produits</h1>
      <aside className="slider">
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
      </aside>
    </section>
  );
}

export default StorePreview;
