import './Evenements.scss';

function Evenements(): JSX.Element {
  return (
    <section className="evenements">
      <div className="event wrc9">
        <h1 className="event-title">saison 2021 (terminée)</h1>
        <p className="event-content">
          P6 au classement mondial pilotes à la grande finale d&apos;Athène
          &quot;Grèce 2021&quot;
        </p>
      </div>
      <div className="event wrc8">
        <h1 className="event-title">saison 2020 (terminée)</h1>
        <p className="event-content">
          P11, P12, P14, P16, P36, P45, P73, P76 au classement mondial pilotes à
          la grande finale d&apos;Athène &quot;Grèce 2021&quot;
        </p>
      </div>
      <div className="event wrc7">
        <h1 className="event-title">saison 2019 (terminée)</h1>
        <p className="event-content">a compléter</p>
      </div>
      <div className="event f1">
        <h1 className="event-title">saison 2019 (terminée)</h1>
        <p className="event-content">a compléter</p>
      </div>
    </section>
  );
}

export default Evenements;
