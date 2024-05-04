/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import useScrollTo from '../useScrollTo/useScrollTo';
import legendsDetails from '../../utils/legends-details';

import './Legends.scss';

function Legends(): JSX.Element {
  const [showDetails, setShowDetails] = useState(false);
  const [teamTarget, setTeamTarget] = useState('no target');

  useScrollTo(0, 0);

  return (
    <section className="legends">
      <div
        role="contentinfo"
        className="legends-pole legends-hit"
        onKeyDown={() => {
          setShowDetails(showDetails);
        }}
        onClick={(e) => {
          setTeamTarget(e.currentTarget.className);

          setShowDetails(!showDetails);
        }}
      >
        {/* <h1 className="legends-pole__title">Section VBR Automobilista 2</h1> */}
        <div
          className={
            showDetails && teamTarget.includes('legends-hit')
              ? 'teams teams--active'
              : 'teams'
          }
        >
          <ul className="teams-list">
            {legendsDetails.hit.pseudo.map((pseudo) => (
              <li className="teams-list__item" key={pseudo.name}>
                <span className="name">
                  <span className="name-vbr">VBR</span> {pseudo.name}
                </span>{' '}
                <span className="function">{pseudo.team}</span>
              </li>
            ))}
          </ul>
          <ul className="teams-palmares">
            {legendsDetails.hit.palmares.map((palm) => (
              <li className="teams-palmares__item" key={palm}>
                {palm}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        role="contentinfo"
        className="legends-pole legends-haze"
        onKeyDown={() => {
          setShowDetails(showDetails);
        }}
        onClick={(e) => {
          setTeamTarget(e.currentTarget.className);

          setShowDetails(!showDetails);
        }}
      >
        {/* <h1 className="legends-pole__title">Section VBR Automobilista 2</h1> */}
        <div
          className={
            showDetails && teamTarget.includes('legends-haze')
              ? 'teams teams--active'
              : 'teams'
          }
        >
          <ul className="teams-list">
            {legendsDetails.haze.pseudo.map((pseudo) => (
              <li className="teams-list__item" key={pseudo.name}>
                <span className="name">
                  <span className="name-vbr">VBR</span> {pseudo.name}
                </span>{' '}
                <span className="function">{pseudo.team}</span>
              </li>
            ))}
          </ul>
          <ul className="teams-palmares">
            {legendsDetails.haze.palmares.map((palm) => (
              <li className="teams-palmares__item" key={palm}>
                {palm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Legends;
