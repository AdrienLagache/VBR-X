import { Link, useParams } from 'react-router-dom';
import './TeamsDetails.scss';

function TeamsDetails(): JSX.Element {
  const params = useParams();
  return (
    <section className="details">
      {params.pole === 'circuit' && (
        <div>
          <div className="details-pole details-ams2">
            <Link to="/teams/circuit">
              <h1 className="details-pole__title">
                Section VBR Automobilista 2
              </h1>
            </Link>
          </div>
          <div className="details-pole details-iracing">
            <Link to="/teams/rallye">
              <h1 className="details-pole__title">Section VBR iRacing</h1>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default TeamsDetails;
