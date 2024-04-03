import MediaQuery from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header(): JSX.Element {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [secVisible, setSecVisible] = useState(false);

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

  useEffect(() => {
    // const handleMainMenu = () => {
    //   setSecVisible(!secVisible);
    // };

    // const menuIcon = document.querySelector('#menu');
    // menuIcon?.addEventListener('click', handleMainMenu);
    const handleMainMenu = () => {
      const scrollingMenu = document.querySelector('#secondary-header');
      if (
        scrollingMenu &&
        scrollingMenu.classList.contains('secondary-header_nav--hidden')
      ) {
        scrollingMenu.classList.remove('secondary-header_nav--hidden');
        scrollingMenu.classList.add('secondary-header_nav--visible');
      } else if (
        scrollingMenu &&
        scrollingMenu.classList.contains('secondary-header_nav--visible')
      ) {
        scrollingMenu.classList.remove('secondary-header_nav--visible');
        scrollingMenu.classList.add('secondary-header_nav--hidden');
      }
    };

    const menuIcon = document.querySelector('#menu');
    menuIcon?.addEventListener('click', handleMainMenu);
  }, []);

  return (
    <div className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <div className="main-header">
        <img
          className="header-logo"
          src="./assets/images/logos/vbr-icon.png"
          alt="Le logo de la Virtual Best Racing"
        />
        <div className="main-header_div">
          <NavLink to="/">
            <p className="main-header_link main-header_link--active">Accueil</p>
          </NavLink>
          <MediaQuery maxWidth={900}>
            <p className="main-header_link" id="menu">
              Menu
            </p>
          </MediaQuery>
          <MediaQuery minWidth={900} maxWidth={1200}>
            <nav className="main-header_nav">
              <ul className="main-header_list">
                <NavLink to="/historique">
                  <li className="main-header_link">historique</li>
                </NavLink>
                <li className="main-header_link">Évènements</li>
                <li className="main-header_link">plus</li>
              </ul>
            </nav>
          </MediaQuery>
          <MediaQuery minWidth={1200}>
            <nav className="main-header_nav">
              <ul className="main-header_list">
                <NavLink to="/historique">
                  <li className="main-header_link">
                    historique de l&apos;association
                  </li>
                </NavLink>
                <li className="main-header_link">Évènements</li>
                <li className="main-header_link">plus</li>
              </ul>
            </nav>
          </MediaQuery>
        </div>
      </div>
      <nav
        // className={`secondary-header_nav${
        //   secVisible ? '--visible' : '--hidden'
        // }`}
        className="secondary-header_nav--hidden"
        id="secondary-header"
      >
        <ul className="secondary-header_list">
          <NavLink to="/historique">
            <li className="secondary-header_item">
              Historique de l&apos;association
            </li>
          </NavLink>
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
