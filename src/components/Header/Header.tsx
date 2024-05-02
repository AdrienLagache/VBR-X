import MediaQuery from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header(): JSX.Element {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [secVisible, setSecVisible] = useState(false);
  const [path, setPath] = useState(window.location.pathname);
  const pathDependancy = window.location.pathname;
  let toPath = path;

  if (path.startsWith('/evenements')) {
    toPath = '/evenements';
  } else if (path.startsWith('/sponsors')) {
    toPath = '/sponsors';
  }

  useEffect(() => {
    setPath(window.location.pathname);
  }, [pathDependancy]);

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
    const handleMainMenu = () => {
      setSecVisible((prevSecVisible) => !prevSecVisible);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && secVisible && !target.closest('#menu')) {
        setSecVisible(false);
      }
    };

    const menuIcon = document.querySelector('#menu');
    menuIcon?.addEventListener('click', handleMainMenu);

    window.addEventListener('click', handleOutsideClick);

    return () => {
      menuIcon?.removeEventListener('click', handleMainMenu);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [secVisible]);

  return (
    <div className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <div className="main-header">
        <NavLink
          to="/"
          onClick={() => {
            setPath('/');
          }}
        >
          <img
            className="header-logo"
            src="/assets/images/logos/vbr-icon.png"
            alt="Le logo de la Virtual Best Racing"
          />
        </NavLink>
        <div className="main-header_div">
          <p>
            <NavLink
              to={toPath}
              className={({ isActive }) => {
                return isActive
                  ? 'main-header_link main-header_link--active'
                  : 'main-header_link';
              }}
            >
              {path === '/' ? 'Accueil' : ''}
              {path === '/historique' ? 'À propos' : ''}
              {path.startsWith('/evenements') ? 'Évènements' : ''}
              {path === '/sponsors' ? 'Sponsors' : ''}
              {path.startsWith('/sponsors') ? 'Sponsors' : ''}
            </NavLink>
          </p>
          <MediaQuery maxWidth={900}>
            <p className="main-header_link" id="menu">
              Menu
            </p>
          </MediaQuery>
          <MediaQuery minWidth={900}>
            <nav className="main-header_nav">
              <ul className="main-header_list">
                <li className="main-header_link">
                  <NavLink to="/historique">À propos</NavLink>
                </li>

                <li className="main-header_link">
                  <NavLink to="/evenements">Évènements</NavLink>
                </li>
                <li className="main-header_link">plus</li>
              </ul>
            </nav>
          </MediaQuery>
        </div>
      </div>
      <nav
        className={`secondary-header_nav${
          secVisible ? '--visible' : '--hidden'
        }`}
        // className="secondary-header_nav--hidden"
        id="secondary-header"
      >
        <ul className="secondary-header_list">
          <li className="secondary-header_item">
            <NavLink to="/historique">À propos</NavLink>
          </li>

          <li className="secondary-header_item">
            <NavLink to="/evenements">Evènements</NavLink>
          </li>
          <li className="secondary-header_item">
            <NavLink to="/sponsors">
              Sponsors et partenaires de l&apos;association
            </NavLink>
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
