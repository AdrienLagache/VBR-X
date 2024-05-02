import { Link, useParams } from 'react-router-dom';
import './AddsDetails.scss';

function AddsDetails(): JSX.Element {
  const params = useParams();
  console.log(params);

  return (
    <section className="adds-details">
      {params.add === 'gt2i' && (
        <div className="details">
          <h1 className="details-title">GT2i</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/gt2i.webp"
            alt="Le logo gt2i"
          />
          <p className="details-description">
            Entreprise dédiée a la Vente de pièces, accessoires et équipement
            auto pour la compétition et le rallye.
          </p>
          <ul className="details-links">
            <Link to="https://www.gt2i.com" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link
              to="https://www.facebook.com/Gt2iCompetition/?epa=SEARCH_BOX#"
              target="_blank"
            >
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'benjx' && (
        <div className="details">
          <h1 className="details-title">BenjX Motors</h1>
          <img
            className="details-image"
            src="/assets/images/benjx-black.webp"
            alt="Le logo benjx motors"
          />
          <p className="details-description">
            Chaîne spécialisée dans la retransmission de courses virtuelles (ou
            simracing) mais aussi dans le divertissement lié aux jeux de courses
            de toute époque !
          </p>
          <ul className="details-links">
            <Link to="https://www.youtube.com/BenjxTV" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link to="https://www.facebook.com/BenjxMotors/#" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'newgo' && (
        <div className="details">
          <h1 className="details-title">NewGo Travel</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/newgo.webp"
            alt="Le logo newgo"
          />
          <p className="details-description">
            Entreprises dédiée aux voyages et deplacements des gamers.
          </p>
          <h2 className="details-description__subtitle">À propos</h2>
          <p className="details-description">
            Voyages de l&apos;imaginaire, de la pop culture et du divertissement
            ! Guide des événements Geeks, solutions de déplacement Esport et
            création de séjours d&apos;exception.
          </p>
          <h2 className="details-description__subtitle">Produits</h2>
          <ul className="details-description__list">
            <li className="description-list__item">
              Courts séjours événements tickets + transports + hébergement
            </li>
            <li className="description-list__item">Activités Geek et Gamers</li>
            <li className="description-list__item">
              Longs voyages thématiques Geek et séries TV
            </li>
          </ul>
          <h2 className="details-description__subtitle">Mission</h2>
          <p className="details-description">
            Faciliter les déplacements aux conventions Geeks/ Gamers et voyager
            partout dans le monde en conciliant passion et authenticité !
          </p>
          <ul className="details-links">
            <Link to="https://newgotravel.com" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link
              to="https://www.facebook.com/NewGoTravel/?epa=SEARCH_BOX#"
              target="_blank"
            >
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'driverxperience' && (
        <div className="details">
          <h1 className="details-title">Driver Xperience</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/driverxperience.webp"
            alt="Le logo de driver xperience"
          />
          <p className="details-description">Venez vous défier entre amis !!</p>
          <p className="details-description">
            Un univers de 400m2 dédié à la simulation automobile sur vérins et à
            la découverte de la réalité virtuelle vous attends.
          </p>
          <ul className="details-links">
            <Link to="https://www.driverxperience.fr" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link
              to="https://www.facebook.com/driverxperience/#"
              target="_blank"
            >
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'jfr' && (
        <div className="details">
          <h1 className="details-title">JFR Performance</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/jfrperformance.webp"
            alt="Le logo jfr performance"
          />
          <p className="details-description">The place to Race, Eat & Drink</p>
          <ul className="details-description__list">
            <li className="description-list__item">
              8 Simulateurs Dynamiques 6 axes en réseau.
            </li>
            <li className="description-list__item">
              Restaurant cool de produits frais bien cuisinés.
            </li>
            <li className="description-list__item">
              Afterwork, Happy Drivers, Parties, Dj&apos;s, Sound & Lights.
            </li>
          </ul>
          <ul className="details-links">
            <Link to="https://www.facebook.com/SAWVI/" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'proracecafe' && (
        <div className="details">
          <h1 className="details-title">Pro Race Cafe</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/pro-race-cafe.webp"
            alt="Le logo pro race cafe"
          />
          <p className="details-description">
            Bar · Restaurant · Salle de sports et loisirs
          </p>
          <p className="details-description">
            Reprogrammation et optimisation gestion calculateur moteur sur
            mesure toutes marques à domicile ou dans nos ateliers sur banc de
            puissance.
          </p>
          <p className="details-description">
            reprogrammation sur mesure + conversion flexfuel
          </p>
          <ul className="details-links">
            <Link to="https://www.proracecafe.com" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link to="https://www.facebook.com/proracecafe/" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'costanzo' && (
        <div className="details">
          <h1 className="details-title">
            Olive Grove and Oil - Domaine Du Cade
          </h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/olive-grove-oil.webp"
            alt="Le logo de olive grove oil"
          />
          <p className="details-description">
            &quot;OGO.Domaine Du Cade&quot; est spécialisée dans la Production
            et l&apos;Exploitation Oléicole.
          </p>
          <p className="details-description">
            Oliveraie en Cévennes et produits dérivés.
          </p>
          <ul className="details-links">
            <Link to="https://www.facebook.com/OGO.DDC/" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'fabdesign' && (
        <div className="details">
          <h1 className="details-title">Fab Design 30</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/fab-design.webp"
            alt="Le logo fab design"
          />
          <p className="details-description">
            Services aux entreprises · Agence de publicité
          </p>
          <p className="details-description">
            Imprimerie numérique, Covering, Flocage de véhicules et de textiles,
            Cartes de visite, flyers, Enseigne, Site Web... Nous équipons les
            entreprises de A à Z.
          </p>
          <ul className="details-links">
            <Link to="https://fabdesign30.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link to="https://www.facebook.com/fabdesign30/" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'polemeca' && (
        <div className="details">
          <h1 className="details-title">Pôle mécanique Alès Cévennes</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/pole-meca-ales.webp"
            alt="Le logo du pôle mécanique dÁlès Cévennes"
          />
          <p className="details-description">
            Sports et loisirs · Services automobiles · Circuit de course
          </p>
          <p className="details-description">Date de création 1998</p>
          <p className="details-description">
            Le Pôle Mécanique regroupe 10 circuits permanents et plus de 40
            entreprises axées autour de la mécanique, du loisir et de la
            compétition.
          </p>
          <ul className="details-links">
            <Link to="https://www.pole-mecanique.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link
              to="https://www.facebook.com/polemecaniqueofficiel/"
              target="_blank"
            >
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'spiruline' && (
        <div className="details">
          <h1 className="details-title">
            Spiruline arc-en-ciel · Esport Nutrition
          </h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/spiruline.webp"
            alt="Le logo de spiruline arc-en-ciel"
          />
          <p className="details-description">
            Société spécialisée dans la production , la fabrication et la
            commercialisation de Produits à base de Spiruline notamment pour le
            sport et l&apos;E-sport.
          </p>
          <ul className="details-links">
            <Link to="https://www.spirulinearcenciel.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'infoware' && (
        <div className="details">
          <h1 className="details-title">Infoware 31</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/infoware.webp"
            alt="Le logo de Infoware 31"
          />
          <p className="details-description">
            InfoWare31 est une Entreprise Informatique dédiée à
            l&apos;Assemblage informatique - Pc Gaming et Professionnel.
          </p>
          <p className="details-description">
            Vous aurez la possibilité, de faire assembler votre prochain
            ordinateur neuf au prix le plus bas possible !
          </p>
          <p className="details-description">
            Aussi en les contactant, ils seront vous proposez exactement ce que
            vous avez réellement besoin, avec le meilleur rapport qualité/prix.
          </p>
          <ul className="details-links">
            <Link to="https://infoware31.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
            <Link to="https://www.facebook.com/InfoWare31" target="_blank">
              <li className="details-links__item--fcb">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez la page</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'alesagglo' && (
        <div className="details">
          <h1 className="details-title">Alès Agglomération</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/ales-agglo.webp"
            alt="Le logo de l'agglomération d'Alès"
          />
          <p className="details-description">Communauté de Communes.</p>
          <p className="details-description">
            2e Communauté d&apos;Agglo du Gard , 5e d&apos;Occitanie, avec 72
            communes et 133 546 habitants!
          </p>
          <p className="details-description">
            Estampillée sud , riche de paysages variés et remarquables, entre
            vignes de la Gardonnenque et montagnes des Cévennes, Alès
            Agglomération se présente comme le territoire du bien-vivre, loin du
            littoral méditerranéen surpeuplé et saturé.Positionnée en partie sur
            les Cévennes, Alès Agglomération bénéficie d&apos;un environnement
            exceptionnel qui la place naturellement sur la voie du développement
            durable.Les labels nationaux qu&apos;elle collectionne depuis 20 ans
            attestent du souci de la collectivité de faire de la 5e
            agglomération d&apos;Occitanie un territoire écologique et
            durable.Sa ville-centre, Alès, sous-préfecture du Gard, avec ses 42
            452 habitants, est le cœur battant d&apos;une agglomération dotée de
            tous les équipements indispensables au bien-être de ses
            habitants.Place d&apos;accueil et d&apos;échanges, Alès
            Agglomération est classée 2e meilleure Agglo de France pour
            entreprendre et 2e pôle industriel d&apos;Occitanie, tout en donnant
            une large place à la viticulture et l&apos;agriculture.Territoire
            équilibré, dynamique et ambitieux, place forte culturelle et
            festive, Alès Agglomération possède tous les atouts pour
            s&apos;inscrire durablement dans l&apos;avenir.
          </p>
          <ul className="details-links">
            <Link to="https://www.ales.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'alescevennes' && (
        <div className="details">
          <h1 className="details-title">Infoware 31</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/ales-cevennes.webp"
            alt="Le logo de la ville d'Alès"
          />
          <p className="details-description">
            Ville d&apos;Alés (Sous-Préfecture)
          </p>
          <p className="details-description">
            Compte officiel de la Ville d&apos;Alès, l&apos;espace du
            bien-vivre. Capitale des Cévennes, patrimoine mondial de
            l&apos;UNESCO. Porte des étoiles ⭐ Alès Agglomération partenaire du
            Parc National des Cévennes, Réserve Internationale de Ciel Étoilé .
          </p>
          <ul className="details-links">
            <Link to="https://www.ales.fr/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {params.add === 'cammus' && (
        <div className="details">
          <h1 className="details-title">Cammus</h1>
          <img
            className="details-image"
            src="/assets/images/logos/adds/cammus.webp"
            alt="Le logo de Cammus"
          />
          <p className="details-description">
            Cammus est une entreprise technologiquement innovante de pointe
            fondée en 2008, qui se consacre à l&apos;intégration industrielle de
            R&D, de fabrication, de vente et d&apos;accessoires de réglage
            automatique Simracing , avec un service de fabrication de kart
            électrique pur haut de gamme .
          </p>
          <ul className="details-links">
            <Link to="https://www.cammus.com/" target="_blank">
              <li className="details-links__item--site">
                <div className="details-links__bindweed" />
                <p className="details-links__text">Visitez le site</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
}

export default AddsDetails;
