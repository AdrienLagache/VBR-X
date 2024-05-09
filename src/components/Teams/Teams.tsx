import { Link } from 'react-router-dom';
import useScrollTo from '../useScrollTo/useScrollTo';

import './Teams.scss';

function Teams(): JSX.Element {
  useScrollTo(0, 0);

  return (
    <section className="teams">
      <h1 className="teams-title">Nos équipes</h1>
      <Link className="teams-link--track" to="/teams/circuit">
        <div className="teams-pole teams-track">
          <h1 className="teams-pole__title">Pôle circuit</h1>
        </div>
      </Link>
      <Link className="teams-link--rally" to="/teams/rallye">
        <div className="teams-pole teams-rally">
          <h1 className="teams-pole__title">Pôle rallye</h1>
        </div>
      </Link>
      <Link className="teams-link" to="/teams/tous-les-membres">
        <div className="teams-pole teams-all">
          <h1 className="teams-pole__title">Tous les membres</h1>
        </div>
      </Link>
    </section>
  );
}

export default Teams;
