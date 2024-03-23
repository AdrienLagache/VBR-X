// import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header(): JSX.Element {
  // const isTablet = useMediaQuery({ query: '(min-width: 900px)' });
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving || moving < 100);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <div className="main-header">
        <img
          className="header-logo"
          src="src/assets/images/logos/vbr-icon.png"
          alt="Le logo de la Virtual Best Racing"
        />
        <div className="main-header_div">
          <NavLink to="/home">
            <p className="main-header_link main-header_link--active">Accueil</p>
          </NavLink>
          <MediaQuery maxWidth={900}>
            <p className="main-header_link">Menu</p>
          </MediaQuery>
          <MediaQuery minWidth={900} maxWidth={1200}>
            <nav className="main-header_nav">
              <ul className="main-header_list">
                <li className="main-header_link">historique</li>
                <li className="main-header_link">Évènements</li>
                <li className="main-header_link">plus</li>
              </ul>
            </nav>
          </MediaQuery>
          <MediaQuery minWidth={1200}>
            <nav className="main-header_nav">
              <ul className="main-header_list">
                <li className="main-header_link">
                  historique de l&apos;association
                </li>
                <li className="main-header_link">Évènements</li>
                <li className="main-header_link">plus</li>
              </ul>
            </nav>
          </MediaQuery>
        </div>
      </div>
      <nav className="secondary-header_nav">
        <ul className="secondary-header_list">
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Historique de l&apos;association
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Evènements
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Sponsors et partenaires de l&apos;association
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Lifestyle VBR
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Nos teams VBR
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              VBR Legends drivers
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Yohan Rossel / Champion du monde WRC3
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Boutique en ligne
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
