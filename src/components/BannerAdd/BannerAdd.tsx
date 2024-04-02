import PropTypes from 'prop-types';

import './BannerAdd.scss';

interface BannerAddProps {
  isUp: boolean;
}

const BannerAdd: React.FC<BannerAddProps> = ({ isUp }) => {
  return (
    <div className={`banner-add${isUp ? '--up banner-add' : ''}`}>
      <div className="banner-add__scrolling-band">
        <div className="images-container">
          <img
            src="./assets/images/logos/adds/ales-agglo.webp"
            alt="Alès agglo"
          />
          <img
            src="./assets/images/logos/adds/ales-cevennes.webp"
            alt="Alès Cevennes"
          />
          <img
            src="./assets/images/logos/adds/benjx.webp"
            alt="Benjx Motorsport"
          />
          <img src="./assets/images/logos/adds/cammus.webp" alt="Cammus" />
          <img
            src="./assets/images/logos/adds/driverxperience.webp"
            alt="Driver Xperience"
          />
          <img
            src="./assets/images/logos/adds/fab-design.webp"
            alt="Fab design"
          />
          <img src="./assets/images/logos/adds/gt2i.webp" alt="Gt2i" />
          <img src="./assets/images/logos/adds/infoware.jpeg" alt="Infoware" />
          <img
            src="./assets/images/logos/adds/jfrperformance.webp"
            alt="JFR Peformance"
          />
          <img src="./assets/images/logos/adds/newgo.webp" alt="New Go" />
          <img
            src="./assets/images/logos/adds/olive-grove-oil.webp"
            alt="Olive grove oil"
          />
          <img
            src="./assets/images/logos/adds/pole-meca-ales.webp"
            alt="Pôle mécanique d'Alès"
          />
          <img
            src="./assets/images/logos/adds/pro-race-cafe.webp"
            alt="Pro race cafe"
          />
          <img
            src="./assets/images/logos/adds/spiruline.webp"
            alt="Spiruline"
          />
          <img
            src="./assets/images/logos/adds/ales-agglo.webp"
            alt="Alès agglo"
          />
          <img
            src="./assets/images/logos/adds/ales-cevennes.webp"
            alt="Alès Cevennes"
          />
          <img
            src="./assets/images/logos/adds/benjx.webp"
            alt="Benjx Motorsport"
          />
          <img src="./assets/images/logos/adds/cammus.webp" alt="Cammus" />
          <img
            src="./assets/images/logos/adds/driverxperience.webp"
            alt="Driver Xperience"
          />
        </div>
      </div>
    </div>
  );
};

BannerAdd.propTypes = {
  isUp: PropTypes.bool.isRequired,
};

export default BannerAdd;
