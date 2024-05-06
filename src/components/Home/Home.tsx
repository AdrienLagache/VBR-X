import { NavLink } from 'react-router-dom';
import StorePreview from '../Store-preview/Store-preview';

import './Home.scss';
import useScrollTo from '../useScrollTo/useScrollTo';

function Home(): JSX.Element {
  useScrollTo(0, 0);
  return (
    <main className="home">
      <section className="presentation">
        <h1 className="presentation-title">
          La team Virtual Best Racing / VBR compte parmi les leaders Français et
          Européens du Simracing.
        </h1>
        <p className="presentation-paragraph">
          Une <strong>association loi 1901</strong> déclarée, légale et
          reconnue, qui compte + de 23 500 abonnés à travers le monde.
        </p>
        <p className="presentation-paragraph">
          Environ <strong>50 membres actifs et permanents</strong> (Staff,
          recruteurs, Pilotes, régleurs, community manager, peintres ,
          organisateurs d&apos;événements , etc...).
        </p>
        <p className="presentation-paragraph">
          Un Parrain Officiel VBR avec le <strong>Champion du Monde</strong> des
          Rallyes WRC3 2021 & <strong>Champion de France</strong> des rallyes
          2019 , <strong>Yohan Rossel</strong> (+ de 22 000 Abonnés) .
        </p>
        <p className="presentation-paragraph" id="fcb">
          Des partenaires et des <strong>sponsors Officiels</strong> connus et
          prestigieux.
        </p>
        <p className="presentation-paragraph">
          Nous évoluons depuis bientot 40 ans aux +++ hauts niveaux sur
          plusieurs grands événements majeurs e-racing internationaux (WRC, F1
          Events, TORA FM, Dirt Worlds Series, ACC/MESF Simracing World, etc
          ...).
        </p>
        <p className="presentation-hashtag">#forzaVBRforever</p>
        <div className="read-more">
          <div className="read-more_bindweed" />
          <NavLink to="/historique" className="read-more_text">
            En savoir plus
          </NavLink>
        </div>
      </section>
      <div className="networks-bindweed">
        <div className="networks-bindweed__line" />
        <p className="networks-bindweed__text">Nos réseaux</p>
        <div className="networks-bindweed__line" />
      </div>
      <ul className="networks">
        <li className="networks-item">
          <a
            className="networks-item__link"
            href="mailto:cost.autumnfuel@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="networks-item__link__pic"
              src="/assets/images/logos/courrier.png"
              alt="une icone mail"
            />
          </a>
        </li>
        <li className="networks-item">
          <a
            className="networks-item__link"
            href="https://www.youtube.com/channel/UCUsclSS5NNyepQQe-vx6SBg?view_as=subscriber"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="networks-item__link__pic"
              src="/assets/images/logos/youtube.png"
              alt="une icone mail"
            />
          </a>
        </li>
        <li className="networks-item">
          <a
            className="networks-item__link"
            href="https://www.facebook.com/VirtualBestRacing/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="networks-item__link__pic"
              src="/assets/images/logos/facebook.png"
              alt="une icone mail"
            />
          </a>
        </li>
      </ul>
      <section className="awards">
        <h1 className="awards-title">Palmarès</h1>
        <h2 className="awards-category">VBR Forza Motorsport</h2>
        <ul className="awards-list">
          <li className="awards-list__item">
            <span>2X</span> Semi Finalistes ( World Séries TORA 2016/2017)
          </li>
        </ul>
        <h2 className="awards-category">VBR eWRC</h2>
        <ul className="awards-list">
          <li className="awards-list__item">
            <span>3X</span> Winners French VBR WRC Xbox (2018/2019/2020)
          </li>
          <li className="awards-list__item">
            <span>3X</span> Winners French VBR WRC PS4 (2018/2019/2020)
          </li>
          <li className="awards-list__item">
            <span>2X</span> 3éme World Team VBR WRC (2018/2019)
          </li>
          <li className="awards-list__item">
            <span>2X</span> Winners VBR WRC Espagne (2019/2020)
          </li>
          <li className="awards-list__item">
            <span>3X</span> Winners VBR WRC République Tchéque (2019/2020/2021)
          </li>
          <li className="awards-list__item">
            <span>3X</span> Winners VBR WRC Estonie (2020/2021/2022)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Finaliste World VBR WRC eSports (2020)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Vice Winner VBR WRC Lebanon (2021)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Vice Winner Estonie WRC EMV2 Official EVAL (2022)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner Estonie WRC EMV1 Official EVAL (2022)
          </li>
          <li className="awards-list__item">
            <span>1X</span> 4éme World Team VBR WRC (2020)
          </li>
          <li className="awards-list__item">
            <span>1X</span> 5éme World Team VBR WRC (2021)
          </li>
        </ul>
        <h2 className="awards-category">VBR eF1</h2>
        <ul className="awards-list">
          <li className="awards-list__item">
            <span>4X</span> Winners French VBR F1 FullPlateform
            (2016/2017/2018/2019)
          </li>
          <li className="awards-list__item">
            <span>2X</span> Finalistes World VBR F1 Events Séries (2017/2019)
          </li>
        </ul>
        <h2 className="awards-category">VBR Dirt</h2>
        <ul className="awards-list">
          <li className="awards-list__item">
            <span>1X</span> Semi Finaliste World Series VBR Dirt (2019)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Quart Finalistes World series VBR Dirt (2020)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner World VBR DR2.0 &quot;Cat WRC1&quot;
            InterTeam Sponsored by thrustmaster (2023)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner World VBR DR2.0 &quot;Cat
            Scratch/Général&quot; InterTeam Sponsored by thrustmaster (2023)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner World VBR DR2.0 &quot;Cat +50 years&quot;
            InterTeam Sponsored by thrustmaster (2023)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner World VBR DR2.0 &quot;Cat R2&quot; InterTeam
            Sponsored by thrustmaster (2023)
          </li>
        </ul>
        <h2 className="awards-category">VBR RBR</h2>
        <ul>
          <li className="awards-list__item">
            <span>1X</span> 6éme World Team VBR RBR (2020)
          </li>
          <li className="awards-list__item">
            <span>1X</span> 3éme French driver VBR RBR (2022)
          </li>
          <li className="awards-list__item">
            <span>1X</span> Winner French VBR RBR &quot;Cat NR4&quot; (2022)
          </li>
        </ul>
      </section>
      <section className="teams-preview">
        <h1 className="teams-title">Equipes</h1>
        <div className="teams-track">
          <h2 className="teams-subtitle">Pôle circuit</h2>
          <ul className="teams-list">
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/iracing.png"
                alt="le logo de iracing"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/rfactor2.png"
                alt="le logo de RFactor 2"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/acc.png"
                alt="le logo de Assetto corsa competizione"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/gt.png"
                alt="le logo de Grand Turismo"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/f1.svg"
                alt="le logo de F1 2019"
              />
            </li>
          </ul>
        </div>
        <div className="teams-rally">
          <h2 className="teams-subtitle">Pôle rallye</h2>
          <ul className="teams-list">
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/rbr.png"
                alt="le logo de Richard Burns rally"
              />
            </li>
            <li>
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/wrc.png"
                alt="le logo de WRC 9"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/dirt.svg"
                alt="le logo de Dirt rally 2.0"
              />
            </li>
            <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/ams2.png"
                alt="le logo de Automobilista 2"
              />
            </li>
            {/* <li className="teams-list__item">
              {' '}
              <img
                className="teams-list__item__pic"
                src="/assets/images/logos/rx.jpg"
                alt="le logo du championnat WRX"
              />
            </li> */}
          </ul>
        </div>
      </section>
      <StorePreview />
    </main>
  );
}

export default Home;
