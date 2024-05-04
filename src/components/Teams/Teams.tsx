import { Link } from 'react-router-dom';
import useScrollTo from '../useScrollTo/useScrollTo';

import './Teams.scss';

function Teams(): JSX.Element {
  useScrollTo(0, 0);

  return (
    <section className="teams">
      <Link to="/teams/circuit">
        <div className="teams-pole teams-track">
          <h1 className="teams-pole__title">Pôle circuit</h1>
        </div>
      </Link>
      <Link to="/teams/rallye">
        <div className="teams-pole teams-rally">
          <h1 className="teams-pole__title">Pôle rallye</h1>
        </div>
      </Link>
    </section>
  );
}

export default Teams;