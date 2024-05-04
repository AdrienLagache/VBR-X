import useScrollTo from '../useScrollTo/useScrollTo';
import './Historic.scss';

function Historic(): JSX.Element {
  useScrollTo(0, 0);
  return (
    <section className="historic">
      <h1 className="historic-title">Dans le doute, pied au plancher...</h1>
      <p className="historic-content">
        L&apos;équipe VIRTUAL BEST RACING a vu le jour en Octobre 2016.
      </p>
      <p className="historic-content">
        Douze mois après sa création la Team VBR en déliquescence a été reprise
        et relancée. Officiellement en Janvier 2018 par VBR AutumnFuel (Ex
        Président de la NLE de 1987 à 2003 et &quot;entre autre&quot; Multiple
        Recordman Mondial sur GT & F1 & TOCA 1/2 de 1997 à 2002)... et qui
        l&apos;a développée dés Octobre 2017. En Parallèle l&apos;Association
        Virtual Best Racing à absorbée plusieurs Teams eRacing telles que ( NLE,
        DDRX, IST, etc ... ).
      </p>
      <ul className="historic-list">
        <li className="historic-list__item">
          Elle est Aujourd&apos;hui spécialisée&quot; exclusivement dans la
          simulation automobile&quot; sur PC, PS4 et Xbox. Nous sommes une
          équipe Française basée a Alès dans la région d&apos;Occitanie.
        </li>
        <li className="historic-list__item">
          Son Statut Officiel d&apos;Association a été créé en Juillet 2018 par
          le Président actuel VBR AutumnFuel.
        </li>
        <li className="historic-list__item">
          En Janvier 2020 le Champion du Monde WRC3 & Champion de France des
          Rallyes Yohan ROSSEL a accepté Officiellement de devenir notre Parrain
          Team VBR.
        </li>
        <li className="historic-list__item">
          Nous favorisons, formons et assistons nos pilotes afin qu&apos;ils
          puissent accéder au mieux vers le haut niveau. Notre structure est
          reconnue pour s&apos;être distinguée au + Haut Niveau International
          sur les Series Forza Motorsport, (d&apos;où notre célébre et
          Légendaire FORZA VBR)... Notamment sur les Worlds (Compétitions
          Officielles et de Références Forza), les célébres &quot;TORA&quot;.
          Puis 2 fois au F1 Esports Series (2017 et 2019 en Angleterre) et pour
          ses 3éme places Mondiale par équipe sur WRC 2019 et WRC 2020, + une P4
          Team WRC 2021 et une P6 en &quot;Grande Finale WRC 2021 à
          Athénes&quot;, ainsi que pour sa P6 Team VBR World 2021 RBR (Richard
          Burns Rally), et ses multiples titres Nationaux & Mondiaux de
          champions et Vice champions individuels sur PC et consoles PS4 et
          Xbox. Nous sommes également connus pour notre présence régulière à
          haut niveau sur les séries DIRT.
        </li>
        <li className="historic-list__item">
          Nos terrains de prédilections vont des circuits aux rallyes et nous
          sommes présents sur la plupart des jeux de simulation automobile.
          Notre philosophie allie le plaisir de rouler et la performance au sein
          d&apos;une équipe composée de &quot;copains&quot; qui partagent le
          même état d&apos;esprit. Notre objectif est d&apos;aller tutoyer les
          sommets dans le monde du Esport.
        </li>
        <li className="historic-list__item">
          Tu es un fan de jeux ! Tu aimes les nouveaux challenges ! Tu es
          quelqu&apos;un de Cool ! Alors n&apos;hésite pas a nous contacter !!!
          Sportivement,
        </li>
      </ul>
      <p className="historic-signature">L&apos;équipe Virtual Best Racing</p>
    </section>
  );
}

export default Historic;
