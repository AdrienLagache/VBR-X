import { useParams } from 'react-router-dom';
import './Results.scss';

function Results(): JSX.Element {
  const params = useParams();

  return (
    <section className="results">
      {params.game === 'wrc9' && (
        <div className="results-container">
          <h1 className="results-title">
            Championnat du monde WRC9 Saison 2021
          </h1>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/wrc9.jpg"
              alt="le tableau des résultats"
            />
          </div>
          <h2 className="results-subtitle">Grande finale à Athènes</h2>
          <p className="results-description">
            <span>P6</span> VBR HUDJA
          </p>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/hudja-results.webp"
              alt="le tableau des résultats"
            />
            <img
              className="results-images__item"
              src="/assets/images/hudja1.webp"
              alt="Hudja en action"
            />
            <img
              className="results-images__item"
              src="/assets/images/hudja2.webp"
              alt="Hudja en action"
            />
          </div>
          <h2 className="results-subtitle">Classement mondial teams</h2>
          <p className="results-description">4ème place mondiale</p>
          <h2 className="results-subtitle">
            Classement mondial des pilotes VBR
          </h2>
          <ul className="results-list">
            <li className="results-description">
              <span>P7</span> VBR HUDJA (Champion de République Tchéque -
              Qualifié pour la grande finale le 08/09/2021)
            </li>
            <li className="results-description">
              <span>P9</span> VBR MARVIN01 (Vice champion du Liban)
            </li>
            <li className="results-description">
              <span>P15</span> VBR Dieguin247 (Champion d&apos;Espagne)
            </li>
            <li className="results-description">
              <span>P16</span> VBR Siiwu (Champion d&apos;Estonie)
            </li>
            <li className="results-description">
              <span>P38</span> VBR Gnomino
            </li>
            <li className="results-description">
              <span>P39</span> VBR CHRIS34
            </li>
            <li className="results-description">
              <span>P53</span> VBR Guxneo
            </li>
            <li className="results-description">
              <span>P91</span> VBR Sine
            </li>
            <li className="results-description">
              <span>P104</span> VBR 82mai28
            </li>
          </ul>
        </div>
      )}

      {params.game === 'wrc8' && (
        <div className="results-container">
          <h1 className="results-title">
            Championnat du monde WRC8 Saison 2020
          </h1>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/wrc8.jpg"
              alt="le tableau des résultats"
            />
          </div>
          <h2 className="results-subtitle">Classement mondial teams</h2>
          <p className="results-description">
            3ème place mondiale (pour la 2ème fois)
          </p>
          <h2 className="results-subtitle">
            Classement mondial des pilotes VBR
          </h2>
          <ul className="results-list">
            <li className="results-description">
              <span>P11</span> VBR Kanweex
            </li>
            <li className="results-description">
              <span>P12</span> VBR HujdaCZ
            </li>
            <li className="results-description">
              <span>P14</span> VBR Tommy
            </li>
            <li className="results-description">
              <span>P16</span> VBR FledTeme
            </li>
            <li className="results-description">
              <span>P36</span> VBR Gnomino
            </li>
            <li className="results-description">
              <span>P45</span> VBR Benji777
            </li>
            <li className="results-description">
              <span>P73</span> VBR Billy
            </li>
            <li className="results-description">
              <span>P76</span> VBR CHRIS34
            </li>
          </ul>
        </div>
      )}

      {params.game === 'wrc7' && (
        <div className="results-container">
          <h1 className="results-title">
            Championnat du monde WRC7 Saison 2019
          </h1>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/wrc7.jpg"
              alt="le tableau des résultats"
            />
          </div>
          <h2 className="results-subtitle">Classement mondial teams</h2>
          <p className="results-description">3ème place mondiale</p>
          <h2 className="results-subtitle">
            Classement mondial des pilotes VBR
          </h2>
          <ul className="results-list">
            <li className="results-description">
              <span>P13</span> VBR SPEEDRUN4PL
            </li>
            <li className="results-description">
              <span>P14</span> VBR KANWEEX (Vice champion PS4)
            </li>
            <li className="results-description">
              <span>P15</span> VBR FLEDTEME (Champion Xbox)
            </li>
            <li className="results-description">
              <span>P16</span> VBR VOIRY
            </li>
            <li className="results-description">
              <span>P17</span> VBR MEGROUD
            </li>
            <li className="results-description">
              <span>P18</span> VBR CHRIS34 (3ème PS4)
            </li>
            <li className="results-description">
              <span>P25</span> VBR DAVY76
            </li>
            <li className="results-description">
              <span>P26</span> VBR DJLEGREG
            </li>
            <li className="results-description">
              <span>P33</span> VBR NICOTWIN (3ème Xbox)
            </li>
            <li className="results-description">
              <span>P37</span> VBR AUTUMNFUEL
            </li>
            <li className="results-description">
              <span>P44</span> VBR SPARTAN
            </li>
            <li className="results-description">
              <span>P49</span> VBR ALEXINO112
            </li>
            <li className="results-description">
              <span>P64</span> VBR EVER-FAST84
            </li>
          </ul>
        </div>
      )}

      {params.game === 'f1' && (
        <div className="results-container">
          <h1 className="results-title">Championnat du monde F1 Saison 2019</h1>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/f1.jpg"
              alt="le tableau des résultats"
            />
          </div>
          <h2 className="results-subtitle">F1 Events Series</h2>
          <p className="results-description">
            <span>2</span> de nos Pilotes, VBR HIT et VBR HAZE, ce sont
            qualifiés cette année pour les F1 Event Series qui ce sont déroulés
            à Londres.
          </p>
          <div className="results-images">
            <img
              className="results-images__item"
              src="/assets/images/f1series-pilotes.webp"
              alt="le tableau des résultats"
            />
            <img
              className="results-images__item"
              src="/assets/images/f1series-scene.webp"
              alt="le tableau des résultats"
            />
            <img
              className="results-images__item"
              src="/assets/images/f1series-action.webp"
              alt="le tableau des résultats"
            />
          </div>
          <h2 className="results-subtitle">Classement mondial teams</h2>
          <p className="results-description">3ème place mondiale</p>
        </div>
      )}
    </section>
  );
}

export default Results;
