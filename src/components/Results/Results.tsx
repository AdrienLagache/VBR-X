import { useParams } from 'react-router-dom';
import './Results.scss';

function Results(): JSX.Element {
  const params = useParams();
  console.log(params.game);
  return (
    <section className="results">
      {params.game === 'wrc9' && (
        <div>
          <h1>Championnat du monde WRC9 Saison 2021</h1>
        </div>
      )}
    </section>
  );
}

export default Results;
