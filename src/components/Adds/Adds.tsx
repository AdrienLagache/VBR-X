import { Link } from 'react-router-dom';
import useScrollTo from '../useScrollTo/useScrollTo';
import './Adds.scss';

function Adds(): JSX.Element {
  useScrollTo(0, 0);
  return (
    <div className="adds">
      <h1 className="adds__title">Nos sponsors et partenaires</h1>
      <Link className="adds__link" to="/sponsors/gt2i">
        <div className="add gt2i" />
      </Link>
      <Link className="adds__link" to="/sponsors/benjx">
        <div className="add benjx" />
      </Link>
      <Link className="adds__link" to="/sponsors/newgo">
        <div className="add newgo" />
      </Link>
      <Link className="adds__link" to="/sponsors/driverxperience">
        <div className="add driverxperience" />
      </Link>
      <Link className="adds__link" to="/sponsors/jfr">
        <div className="add jfr" />
      </Link>
      <Link className="adds__link" to="/sponsors/proracecafe">
        <div className="add proracecafe" />
      </Link>
      <Link className="adds__link" to="/sponsors/costanzo">
        <div className="add costanzo" />
      </Link>
      <Link className="adds__link" to="/sponsors/fabdesign">
        <div className="add fabdesign" />
      </Link>
      <Link className="adds__link" to="/sponsors/polemeca">
        <div className="add polemeca" />
      </Link>
      <Link className="adds__link" to="/sponsors/spiruline">
        <div className="add spiruline" />
      </Link>
      <Link className="adds__link" to="/sponsors/infoware">
        <div className="add infoware" />
      </Link>
      <Link className="adds__link" to="/sponsors/alesagglo">
        <div className="add alesagglo" />
      </Link>
      <Link className="adds__link" to="/sponsors/alescevennes">
        <div className="add alescevennes" />
      </Link>
      <Link className="adds__link" to="/sponsors/cammus">
        <div className="add cammus" />
      </Link>
    </div>
  );
}

export default Adds;
