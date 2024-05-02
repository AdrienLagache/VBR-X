import { Link } from 'react-router-dom';
import './Teams.scss';

function Teams(): JSX.Element {
  return (
    <section className="teams">
      <div className="teams-pole teams-track">
        <Link to="/teams/circuit">
          <h1 className="teams-pole__title">Pôle circuit</h1>
        </Link>
      </div>
      <div className="teams-pole teams-rally">
        <Link to="/teams/rallye">
          <h1 className="teams-pole__title">Pôle rally</h1>
        </Link>
      </div>
    </section>
  );
}

export default Teams;
