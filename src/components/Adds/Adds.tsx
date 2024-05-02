import { Link } from 'react-router-dom';
import './Adds.scss';

function Adds(): JSX.Element {
  return (
    <section className="adds">
      <Link to="/sponsors/gt2i">
        <div className="add gt2i" />
      </Link>
      <Link to="/sponsors/benjx">
        <div className="add benjx" />
      </Link>
      <Link to="/sponsors/newgo">
        <div className="add newgo" />
      </Link>
      <Link to="/sponsors/driverxperience">
        <div className="add driverxperience" />
      </Link>
      <Link to="/sponsors/jfr">
        <div className="add jfr" />
      </Link>
      <Link to="/sponsors/proracecafe">
        <div className="add proracecafe" />
      </Link>
      <Link to="/sponsors/costanzo">
        <div className="add costanzo" />
      </Link>
      <Link to="/sponsors/fabdesign">
        <div className="add fabdesign" />
      </Link>
      <Link to="/sponsors/polemeca">
        <div className="add polemeca" />
      </Link>
      <Link to="/sponsors/spiruline">
        <div className="add spiruline" />
      </Link>
      <Link to="/sponsors/infoware">
        <div className="add infoware" />
      </Link>
      <Link to="/sponsors/alesagglo">
        <div className="add alesagglo" />
      </Link>
      <Link to="/sponsors/alescevennes">
        <div className="add alescevennes" />
      </Link>
      <Link to="/sponsors/cammus">
        <div className="add cammus" />
      </Link>
    </section>
  );
}

export default Adds;
