import { Link } from 'react-router-dom';

import './Evenements.scss';

function Evenements(): JSX.Element {
  return (
    <section className="evenements">
      <Link to="/evenements/wrc9">
        <div className="event wrc9">
          <h1 className="event-title">saison 2021 (terminée)</h1>
        </div>
      </Link>
      <Link to="/evenements/wrc8">
        <div className="event wrc8">
          <h1 className="event-title">saison 2020 (terminée)</h1>
        </div>
      </Link>
      <Link to="/evenements/wrc7">
        <div className="event wrc7">
          <h1 className="event-title">saison 2019 (terminée)</h1>
        </div>
      </Link>
      <Link to="/evenements/f1">
        <div className="event f1">
          <h1 className="event-title">saison 2019 (terminée)</h1>
        </div>
      </Link>
    </section>
  );
}

export default Evenements;
