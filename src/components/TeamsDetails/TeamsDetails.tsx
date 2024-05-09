/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import teamsDetails from '../../utils/teams-details';
import useScrollTo from '../useScrollTo/useScrollTo';

import './TeamsDetails.scss';

function TeamsDetails(): JSX.Element {
  const [showDetails, setShowDetails] = useState(false);
  const [teamTarget, setTeamTarget] = useState('no target');
  const params = useParams();

  useScrollTo(0, 0);

  return (
    <section className="details">
      {params.pole === 'circuit' && (
        <div className="pole-container">
          <h1 className="pole-title">Pôle circuit</h1>
          <div
            role="contentinfo"
            className="details-pole details-ams2"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR Automobilista 2</h1>
            <div
              className={
                showDetails && teamTarget.includes('details-ams2')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.ams2.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.ams2.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            role="contentinfo"
            className="details-pole details-iracing"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR Automobilista 2</h1>
            <div
              className={
                showDetails && teamTarget.includes('details-iracing')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.iRacing.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.iRacing.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            role="contentinfo"
            className="details-pole details-rfactor"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR RFactor</h1>
            <div
              className={
                showDetails && teamTarget.includes('details-rfactor')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.rFactor.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.rFactor.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            role="contentinfo"
            className="details-pole details-acc"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">
              Section VBR Asseto Corsa Competizione
            </h1>
            <div
              className={
                showDetails && teamTarget.includes('details-acc')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.acc.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.acc.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            role="contentinfo"
            className="details-pole details-gt"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR Grand Turismo</h1>
            <div
              className={
                showDetails && teamTarget.includes('details-gt')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.gt.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.gt.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            role="contentinfo"
            className="details-pole details-f1"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR F1 Series</h1>
            {/* {showDetails && teamTarget.includes('details-f1') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-f1')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.f1.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.f1.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>
      )}

      {params.pole === 'rallye' && (
        <div className="pole-container">
          <h1 className="pole-title">Pôle rallye</h1>
          <div
            role="contentinfo"
            className="details-pole details-rbr"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">
              Section VBR Richard Burns Rally
            </h1>
            {/* {showDetails && teamTarget.includes('details-rbr') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-rbr')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.rbr.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.rbr.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>

          {/* {showDetails && teamTarget.includes('details-wrc') && ( */}
          <div
            role="contentinfo"
            className="details-pole details-wrc"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR WRC</h1>
            {/* {showDetails && teamTarget.includes('details-wrc') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-wrc')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.wrc.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.wrc.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>
          {/* )} */}

          {/* {showDetails && teamTarget.includes('details-dirt') && ( */}
          <div
            role="contentinfo"
            className="details-pole details-dirt"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">
              Section VBR Dirt et Dirt rally
            </h1>
            {/* {showDetails && teamTarget.includes('details-dirt') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-dirt')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.dirt.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.dirt.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>
          {/* )} */}

          <div
            role="contentinfo"
            className="details-pole details-rx"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Section VBR-X Rallycross</h1>
            {/* {showDetails && teamTarget.includes('details-rx') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-rx')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.rx.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.rx.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>
      )}

      {params.pole === 'tous-les-membres' && (
        <div>
          <h1 className="pole-title">Tous les membres VBR</h1>
          <div
            role="contentinfo"
            className="details-pole details-all"
            onKeyDown={() => {
              setShowDetails(showDetails);
            }}
            onClick={(e) => {
              setTeamTarget(e.currentTarget.className);
              setShowDetails(!showDetails);
            }}
          >
            <h1 className="details-pole__title">Tous les membres</h1>
            {/* {showDetails && teamTarget.includes('details-all') && ( */}
            <div
              className={
                showDetails && teamTarget.includes('details-all')
                  ? 'team team--active'
                  : 'team'
              }
            >
              <ul className="teams-palmares">
                {teamsDetails.all.palmares.map((palm) => (
                  <li className="team-palmares__item" key={palm}>
                    {palm}
                  </li>
                ))}
              </ul>
              <ul className="teams-list">
                {teamsDetails.all.list.map((list) => (
                  <li className="teams-list__item" key={list.name}>
                    <span className="name">
                      <span className="name-vbr">VBR</span> {list.name}
                    </span>{' '}
                    <span className="function">{list.function}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
          </div>
          <h2 className="details-advertising__title">Attention :</h2>
          <p className="details-advertising__text">
            Toute personne{' '}
            <strong>
              ayant un pseudonyme VBR et ne figurant pas dans cette liste
            </strong>
            , ne peut prétendre être membre de notre association.
          </p>
        </div>
      )}
    </section>
  );
}

export default TeamsDetails;
