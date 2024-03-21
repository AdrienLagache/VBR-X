import './BannerAdd.scss';

function BannerAdd(): JSX.Element {
  return (
    <div className="banner-add">
      <div className="banner-add__scrolling-band">
        {/* <ImageSlider
          images={['src/assets/images/logos/adds/ales-agglo.webp']}
        /> */}
        <div className="images-container">
          <img
            src="src/assets/images/logos/adds/ales-agglo.webp"
            alt="Alès agglo"
          />
          <img
            src="src/assets/images/logos/adds/ales-cevennes.webp"
            alt="Alès Cevnnes"
          />
          <img
            src="src/assets/images/logos/adds/benjx.webp"
            alt="Benjx Motorsport"
          />
          <img src="src/assets/images/logos/adds/cammus.webp" alt="Cammus" />
          <img
            src="src/assets/images/logos/adds/driverxperience.webp"
            alt="Driver Xperience"
          />
          <img
            src="src/assets/images/logos/adds/fab-design.webp"
            alt="Fab design"
          />
          <img src="src/assets/images/logos/adds/gt2i.webp" alt="Gt2i" />
          <img
            src="src/assets/images/logos/adds/infoware.jpeg"
            alt="Infoware"
          />
          <img
            src="src/assets/images/logos/adds/jfrperformance.webp"
            alt="JFR Peformance"
          />
          <img src="src/assets/images/logos/adds/newgo.webp" alt="New Go" />
          <img
            src="src/assets/images/logos/adds/olive-grove-oil.webp"
            alt="Olive grove oil"
          />
          <img
            src="src/assets/images/logos/adds/pole-meca-ales.webp"
            alt="Pôle mécanique d'Alès"
          />
          <img
            src="src/assets/images/logos/adds/pro-race-cafe.webp"
            alt="Pro race cafe"
          />
          <img
            src="src/assets/images/logos/adds/spiruline.webp"
            alt="Spiruline"
          />
          <img
            src="src/assets/images/logos/adds/ales-agglo.webp"
            alt="Alès agglo"
          />
          <img
            src="src/assets/images/logos/adds/ales-cevennes.webp"
            alt="Alès Cevnnes"
          />
          <img
            src="src/assets/images/logos/adds/benjx.webp"
            alt="Benjx Motorsport"
          />
          <img src="src/assets/images/logos/adds/cammus.webp" alt="Cammus" />
          <img
            src="src/assets/images/logos/adds/driverxperience.webp"
            alt="Driver Xperience"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerAdd;
